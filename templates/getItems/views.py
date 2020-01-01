import requests
from dateutil.parser import parse
from flask import render_template, request

from templates import app, items, items_url


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html', data=items)


@app.route('/getItems/<item_name>', methods=['GET'])
def get_item(item_name):
    url = f'{items_url}/{item_name}/statistics'

    app.logger.info(f'Url {url}')

    try:
        json_response = requests.get(url).json()
    except requests.exceptions.RetryError as e:
        app.logger.error(e)
    except requests.exceptions.BaseHTTPError as e:
        app.logger.error(e)

    app.logger.info(f'Response {json_response}')

    hours_stats = json_response['payload']['statistics_live']['48hours']
    hours_stats.sort(key=lambda x: x['datetime'])

    if len(hours_stats) == 0:
        return {'name': item_name, 'last_stats': []}
    else:
        date_time = parse(hours_stats[-1]["datetime"])
        hours_stats[-1]["date"] = f'{date_time.date()}'
        hour_str = f'{date_time.hour: 02}' if date_time.hour != 0 else '00'
        minute_str = f'{date_time.minute: 02}' if date_time.minute != 0 else '00'
        hours_stats[-1]["time"] = f'{hour_str}:{minute_str}'
        return {'name': item_name, 'last_stats': hours_stats[-1]}


@app.route('/itemsList', methods=['POST'])
def get_stats():
    content = request.form
    app.logger.info(f'Content {content}')

    error_relic_name = 'relic_name' not in content
    error_refinement = 'refinement' not in content

    if error_relic_name or error_refinement:
        return render_template('index.html', data=items, error_refinement=error_refinement,
                               error_relic_name=error_relic_name)

    refinement = content.getlist("refinement")
    app.logger.info(f'refinement {refinement}')

    relic_names = content.getlist("relic_name")
    app.logger.info(f'relic names {relic_names}')
    item_data = []

    for refin in refinement:
        for relic in relic_names:
            json_response = get_item(f'{relic}_{refin}')
            app.logger.info(f'Response {json_response}')
            item_data.append(json_response)

    item_data.sort(key=lambda x: x['name'])

    prev_data = {"refinement": refinement, "relic_names": relic_names}

    return render_template('index.html', data=items, relics=item_data, prev_data=prev_data)
