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
    f = jsonBody["frequency"]
    n = int(l * f)  # 每组数据的个数
    x = int(l / n)  # 结果共有x(+1)组数据
    y = l - x * n  # 第x+1组的数据
    print(a, l, f, n, x, y)
    ans = {}
    for i in range(x):
        key = str(n * i) + "~" + str((n * (i + 1)))
        value = a[n * i : (n * (i + 1))]
        ans[key] = value
        print(key, " - ", value)
    if y != 0:
        key = str(n * x) + "~" + str(l)
        value = a[n * x :]
        ans[key] = value
        print(key, " - ", value)

    return {
        "statusCode": 200,
        "isBase64Encoded": False,
        "body": json.dumps(ans),
        "headers": {"Content-Type": "application/json"},
    }
