# -*- coding:utf-8 -*-
import json
import numpy as np
import base64
# from scipy import stats


def handler (event, context):
    encodedBody = event["body"]
    decodedBody = base64.b64decode(encodedBody).decode()
    jsonBody = json.loads(decodedBody)
    counts = np.bincount(jsonBody)
    print(np.argmax(counts))
    return {
        "statusCode": 200,
        "isBase64Encoded": False,
        "body": str(np.argmax(counts)),
        "headers": {
            "Content-Type": "application/json"
        }
    }