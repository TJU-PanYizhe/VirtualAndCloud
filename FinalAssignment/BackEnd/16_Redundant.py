# -*- coding:utf-8 -*-
import json
import numpy as np
from collections import Counter
import base64


def handler(event, context):
    encodedBody = event["body"]
    decodedBody = base64.b64decode(encodedBody)
    jsonBody = json.loads(decodedBody)
    decodedBody = decodedBody.decode()
    arr = np.array(jsonBody)

    return {
        "statusCode": 200,
        "isBase64Encoded": False,
        "body": str(np.array(list(set([tuple(t) for t in arr])))),
        "headers": {"Content-Type": "application/json"},
    }
