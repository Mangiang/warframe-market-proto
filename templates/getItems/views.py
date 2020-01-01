import requests
from dateutil.parser import parse
from flask import current_app as app
from flask import request, Blueprint, jsonify
from flask_cors import cross_origin

from templates import items, items_url

get_items_blueprint = Blueprint('getItems', __name__)


@get_items_blueprint.route('/getRefinementList', methods=['GET'])
@cross_origin()
def get_refinement_list():
    return jsonify(items.void_relics.refinement)


@get_items_blueprint.route('/getRelicsList', methods=['GET'])
@cross_origin()
def get_relics_list():
    return jsonify([relics for relics in items.void_relics.relics])


@get_items_blueprint.route('/getRelicsStats', methods=['POST'])
@cross_origin()
def get_relics_stats():
    content = request.get_json()
    app.logger.info(f'Content {content}')

    refinement = content["refinement"]
    app.logger.info(f'refinement {refinement}')

    relic_names = content["relic_name"]
    app.logger.info(f'relic names {relic_names}')
    item_data = []

    id = 1

    for refin in refinement:
        for relic in relic_names:
            response = get_item(f'{relic}_{refin}')
            app.logger.info(f'Response {response}')
            response['id'] = id
            id += 1
            item_data.append(response)

    app.logger.info(f'item_data {item_data}')
    return jsonify(item_data)


def get_item(item_name):
    url = f'{items_url}/{item_name}/statistics'

    app.logger.info(f'Url {url}')

    try:
        json_response = requests.get(url).json()
    except requests.exceptions.RetryError as e:
        app.logger.error(e)
    except requests.exceptions.BaseHTTPError as e:
        app.logger.error(e)

    app.logger.info(f'get_item response {json_response}')

    hours_stats = json_response['payload']['statistics_live']['48hours']
    hours_stats.sort(key=lambda x: x['datetime'])

    stats = {'name': item_name, 'type': 'N/A', 'date': 'N/A',
             'time': 'N/A',
             'volume': 'N/A', 'min_price': 'N/A',
             'avg_price': 'N/A', 'max_price': 'N/A',
             'wa_price': 'N/A', 'median_price': 'N/A'}

    if len(hours_stats) != 0:
        last_hour = hours_stats[-1]
        date_time = parse(last_hour["datetime"])

        stats["date"] = f'{date_time.date()}'
        hour_str = f'{date_time.hour: 02}' if date_time.hour != 0 else '00'
        minute_str = f'{date_time.minute: 02}' if date_time.minute != 0 else '00'

        stats["time"] = f'{hour_str}:{minute_str}'
        stats['type'] = last_hour['order_type']
        stats['volume'] = last_hour['volume']
        stats['min_price'] = last_hour['min_price']
        stats['avg_price'] = last_hour['avg_price']
        stats['max_price'] = last_hour['max_price']
        stats['wa_price'] = last_hour['wa_price']
        stats['median_price'] = last_hour['median']
    return stats
