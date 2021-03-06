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


@get_items_blueprint.route('/getRelicsFullNameList', methods=['GET'])
@cross_origin()
def get_relics_full_name_list():
    relics_list = []
    for refinement in items.void_relics.refinement:
        for relics in items.void_relics.relics:
            for relic_name in relics['names']:
                relics_list.append(f" {relics['era'].capitalize()} {relic_name.capitalize()} {refinement.capitalize()}")
    return jsonify(relics_list)


# The requests progression [currentRequestNb, totalRequestsNb]
request_progression = {'request_done': 0, 'request_total': 0}
id = 1


@get_items_blueprint.route('/getRelicsProgression', methods=['GET'])
@cross_origin()
def get_relics_progress():
    return jsonify(request_progression)


@get_items_blueprint.route('/getRelicsStats', methods=['POST'])
@cross_origin()
def get_relics_stats():
    global request_progression, id

    content = request.get_json()
    app.logger.info(f'Content {content}')

    relic_name = content['value'].lower().replace(' ', '_')
    app.logger.info(f'relic names {relic_name}')

    request_progression = {'request_done': id, 'request_total': len(relic_name)}
    response = get_item(relic_name)
    app.logger.info(f'Response {response}')
    response['id'] = id
    id += 1
    request_progression['request_done'] = id
    response['fullName'] = response['name']
    response['name'] = content['value']

    request_progression = {'request_done': 0, 'request_total': 0}
    app.logger.info(f'item_data {response}')
    return jsonify(response)


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
