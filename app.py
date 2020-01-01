import logging

from templates import app

if __name__ == 'main':
    gunicorn_logger = logging.getLogger('gunicorn.error')
    app.logger.handlers = gunicorn_logger.handlers
    app.logger.setLevel(gunicorn_logger.level)
    app.run(host="https://warframe-market-proto.herokuapp.com", port=80, processes=3, debug=True)
