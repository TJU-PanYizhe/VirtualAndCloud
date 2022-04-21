# -*- coding:utf-8 -*-
import json


def handler(event, context):
    return {
        "statusCode": 200,
        "isBase64Encoded": False,
        "body": json.dumps(event),
        "headers": {"Content-Type": "application/json"},
    }
