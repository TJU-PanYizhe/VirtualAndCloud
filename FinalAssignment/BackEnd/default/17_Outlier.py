# -*- coding:utf-8 -*-
import json
import numpy as np
import base64


def handler(event, context):

    encodedBody = event["body"]
    decodedBody = base64.b64decode(encodedBody).decode()
    jsonBody = json.loads(decodedBody)

    mean = np.mean(jsonBody)
    std = np.std(jsonBody)
    sigma = std * 3
    a = np.array(jsonBody, dtype=float)
    row = len(a)
    col = len(a[0])

    # ans = np.array()

    for i in range(0, row):
        for j in range(0, col):
            if (a[i][j] - mean) > sigma:
                a = np.delete(a, i, 0)

    # x = sorted(jsonBody)
    return {
        "statusCode": 200,
        "isBase64Encoded": False,
        "body": json.dumps(a.tolist()),
        "headers": {"Content-Type": "application/json"},
    }
