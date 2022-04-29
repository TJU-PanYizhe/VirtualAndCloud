# -*- coding:utf-8 -*-
import json
import numpy as np
import base64


def handler(event, context):
    encodedBody = event["body"]
    decodedBody = base64.b64decode(encodedBody).decode()
    jsonBody = json.loads(decodedBody)

    k = jsonBody["key"]
    for key in k:
        print(key, ": ", k[key])
    m = jsonBody["data"]
    c = len(m[0])
    r = len(m)
    t = [[0 for col in range(c)] for row in range(r)]
    for i in range(r):
        for j in range(c):
            if t[i][j] == 0:
                for key in k:
                    if m[i][j] == float(key):
                        m[i][j] = k[key]
                        t[i][j] = 1
                        break

    return {
        "statusCode": 200,
        "isBase64Encoded": False,
        "body": str(m),
        "headers": {"Content-Type": "application/json"},
    }
