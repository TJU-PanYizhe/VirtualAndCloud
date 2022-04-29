# -*- coding:utf-8 -*-
import json
import numpy as np
from collections import Counter
import base64


def handler(event, context):
    encodedBody = event["body"]
    decodedBody = base64.b64decode(encodedBody).decode()
    jsonBody = json.loads(decodedBody)

    return {
        "statusCode": 200,
        "isBase64Encoded": False,
        "body": str(np.around(jsonBody["data"], jsonBody["bitcount"])),
        "headers": {"Content-Type": "application/json"},
    }
