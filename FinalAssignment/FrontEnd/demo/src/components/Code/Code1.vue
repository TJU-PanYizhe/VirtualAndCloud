<script>
const code = `# -*- coding:utf-8 -*-
import json
import numpy as np
import base64


def handler(event, context):
    print(" - - - - - - - ")
    encodedBody = event["body"]
    decodedBody = base64.b64decode(encodedBody)
    decodedBody = decodedBody.decode()
    dBody = decodedBody[1:-1]

    print(decodedBody)
    print(dBody)
    list = []
    numList = dBody.split(",")
    print(numList)
    # for n in numList:
        # list.append(float(n))
        # print(n, " - ", float(n))
    # result = np.mean(list)

    return {
        "statusCode": 200,
        "isBase64Encoded": True,
        "body": encodedBody,
        "headers": {"Content-Type": "application/json"},
    }
`;
const example = "[1,2,3,4,5,6,7]";
const result = "4";

export default {
  code,
  example,
  result,
};
</script>

<style></style>
