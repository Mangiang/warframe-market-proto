import logging
import os

import requests
from flask import Flask, json
from flask.logging import default_handler
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

from items.items import Items
from logger import RequestFormatter

app = Flask(__name__, static_folder='./public', template_folder="./static")
CORS(app)
limiter = Limiter(key_func=get_remote_address)
limiter.init_app(app)

formatter = RequestFormatter('[%(asctime)s] %(levelname)s in %(method)s %(path)s: %(message)s')
default_handler.setFormatter(formatter)
base_api = 'https://api.warframe.market/v1'
warframestat_api = 'https://api.warframestat.us/items/search'
items_url = f'{base_api}/items'

items = None


def get_relics():
    global items

    with open(os.path.join("./static", "data", "items_categories.json"), "r") as test_file:
        items = Items(json.load(test_file))

    for relic in items.void_relics.all:
        tmp_list = set()
        try:
            json_response_stat = requests.get(f'{warframestat_api}/{relic}').json()
        except requests.exceptions.RetryError as e:
            print(e)
        except requests.exceptions.BaseHTTPError as e:
            print(e)

        for relic_obj in json_response_stat:
            if relic_obj['category'] == 'Relics':
                name = relic_obj['name'].lower().split()[1]
                tmp_list.add(name)

        items.void_relics.__setattr__(relic, tmp_list)
    print(items.void_relics)


gunicorn_logger = logging.getLogger('gunicorn.error')
app.logger.handlers = gunicorn_logger.handlers
app.logger.setLevel(gunicorn_logger.level)
get_relics()

import templates.getItems.views