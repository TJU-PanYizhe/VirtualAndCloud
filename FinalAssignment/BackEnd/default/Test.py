# -*- coding:utf-8 -*-
import json


def handler(event, context):
    print("event")
    print(event)
    print(event["myContext"])
    array = event["myContext"]
    print(array[3])
    print("context")
    print(context)
    print(context.getFunctionName())
    return {
        "statusCode": 200,
        "isBase64Encoded": False,
        "body": json.dumps(event),
        "headers": {"Content-Type": "application/json"},
    }
