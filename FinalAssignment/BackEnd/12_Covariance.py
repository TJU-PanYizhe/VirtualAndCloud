# -- coding:utf-8 --
import json
import numpy as np
import base64


def handler(event, context):
    encodedBody = event["body"]
    decodedBody = base64.b64decode(encodedBody).decode()
    jsonBody = json.loads(decodedBody)
    jsonBody = jsonBody.split(".")
    str1 = jsonBody[0].replace("[", "").replace("]", "")
    str2 = jsonBody[1].replace("[", "").replace("]", "")
    list1 = str1.split(",")
    list2 = []
    for i in list1:
        i = float(i)
        list2.append(i)
    list3 = str2.split(",")
    list4 = []
    for i in list3:
        i = float(i)
        list4.append(i)
    a = np.array([list2, list4])
    ans = np.cov(a)
    # avg1 = np.mean(list1)
    return {
        "statusCode": 200,
        "isBase64Encoded": False,
        "body": str(ans),
        "headers": {"Content-Type": "application/json"},
    }
