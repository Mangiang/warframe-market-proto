import logging

from flask import request, has_request_context


class RequestFormatter(logging.Formatter):
    def format(self, record):
        if has_request_context():
            record.method = request.method
            record.path = request.path
        else:
            record.method = None
            record.path = None

        return super().format(record)
