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
    std = np.std(jsonBody)
    sigma = std * 3
    a = np.array(jsonBody, dtype=float)
    row = len(a)
    col = len(a[0])

    # ans = np.array()
    counterlist = []
    for i in range(0, row):
        for j in range(0, col):
            if (a[i][j] - mean) > sigma:
                counterlist.append(i)
    for i in counterlist:
        a = np.delete(a, i, 0)

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
    [2,3,4,5],
    [5,2,4,7],
    [1,2,10000,4],
    [10000,100000,10000,10000]
]`;
const result = `
[2,3,4,5]
[5,2,4,7]
[1,2,10000,4]`;

export default {
  code,
  example,
  result,
};
</script>

<style></style>
