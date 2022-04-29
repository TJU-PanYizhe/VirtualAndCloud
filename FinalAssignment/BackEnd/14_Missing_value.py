# -*- coding:utf-8 -*-
import json
import numpy as np
import base64


def handler(event, context):

    encodedBody = event["body"]
    decodedBody = base64.b64decode(encodedBody).decode()
    jsonBody = json.loads(decodedBody)

    a = np.array(jsonBody, dtype=np.float)
    raw = len(a)
    col = len(a[0])
    temp = []
    # ans = []
    for i in range(0, raw):
        vec = a[i]
        for j in range(0, col):
            if np.isnan(vec[j]):
                a[i][j] = 0
    # ans = np.array(ans)

    return {
        "statusCode": 200,
        "isBase64Encoded": False,
        "body": json.dumps(a.tolist()),
        "headers": {"Content-Type": "application/json"},
    }
