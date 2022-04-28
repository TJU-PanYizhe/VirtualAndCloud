<script>
const code = `# -*- coding:utf-8 -*-
import json
import numpy as np
import base64


def handler(event, context):

    encodedBody = event["body"]
    decodedBody = base64.b64decode(encodedBody).decode()
    jsonBody = json.loads(decodedBody)

    mean = np.mean(jsonBody)
    # std = np.std(jsonBody)
    # sigma = std * 3
    a = np.array(jsonBody, dtype=float)
    row = len(a)
    col = len(a[0])

    # ans = np.array()
    tempSet = set()
    counterlist = []
    for i in range(0, col):
        for j in range(0, row):
            tempSet.add(a[j][i])
        if len(tempSet) == row:
            counterlist.append(i)
        tempSet = set()
    print(counterlist)
    for i in range(len(counterlist) - 1, -1, -1):
        a = np.delete(a, counterlist[i], 1)

    # x = sorted(jsonBody)
    return {
        "statusCode": 200,
        "isBase64Encoded": False,
        "body": json.dumps(a.tolist()),
        "headers": {"Content-Type": "application/json"},
    }
`;
const example = `
[
    [1,3,5,7],
    [2,4,6,8],
    [3,6,9,12],
    [2,5,7,8]
]`;
const result = `
[1,7]
[2,8]
[3,12]
[2,8]`;

export default {
  code,
  example,
  result,
};
</script>

<style></style>
