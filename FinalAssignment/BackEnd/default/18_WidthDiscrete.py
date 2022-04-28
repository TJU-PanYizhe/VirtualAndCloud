# -*- coding:utf-8 -*-
import json
import numpy as np
import base64


def handler(event, context):

    encodedBody = event["body"]
    decodedBody = base64.b64decode(encodedBody).decode()
    jsonBody = json.loads(decodedBody)

    a = jsonBody["data"]
    a = sorted(a)
    l = len(a)
    w = jsonBody["width"]
    maximum = max(a)
    minimum = min(a)
    x = int((maximum - minimum) / w)  # 结果共有x(+1)组数据
    print(a, l, w, x)
    ans = {}
    index = -1
    for i in range(x):
        key = str(w * i) + "~" + str((w * (i + 1)))
        value = []
        for j in range(index + 1, l):
            if a[j] <= w * (i + 1):
                index = j
                value.append(a[j])
        ans[key] = value
        print(key, " - ", value)

    return {
        "statusCode": 200,
        "isBase64Encoded": False,
        "body": json.dumps(ans),
        "headers": {"Content-Type": "application/json"},
    }
