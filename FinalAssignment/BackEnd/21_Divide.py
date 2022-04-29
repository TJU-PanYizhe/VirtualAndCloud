import json
import base64
import numpy as np


def handler(event, context):
    encodedBody = event["body"]
    decodedBody = base64.b64decode(encodedBody)
    jsonBody = json.loads(decodedBody)
    decodedBody = decodedBody.decode()
    res = []
    colnum = jsonBody["col"] - 1
    boundary = jsonBody["boundary"]
    arr = np.array(jsonBody["data"], dtype=str)
    raw = len(arr)
    col = len(arr[0])
    list = []
    temp = []
    for i in range(0, raw):
        for j in range(0, col):
            if j != colnum:
                temp.append(int(arr[i][j]))
            else:
                if int(arr[i][colnum]) >= boundary:
                    temp.append("high")
                else:
                    temp.append("low")
        list += [temp]
        temp = []

    return {
        "statusCode": 200,
        "isBase64Encoded": False,
        "body": str(list),
        "headers": {"Content-Type": "application/jsin"},
    }
