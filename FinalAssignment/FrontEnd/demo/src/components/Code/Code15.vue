<script>
const code = `# -*- coding:utf-8 -*-
import json
import numpy as np
import base64


def handler(event, context):
    encodedBody = event["body"]
    decodedBody = base64.b64decode(encodedBody).decode()
    jsonBody = json.loads(decodedBody)

    a = jsonBody["axis"]
    m = jsonBody["data"]
    l = len(jsonBody)
    ans = []
    if l == 1:
        ans.append(m)
    else:
        ans.append(np.concatenate(m,int(a)))
        # for i in range(l - 1):
        #     ans.append(np.append(m[i], m[i + 1], int(a)))
    return {
        "statusCode": 200,
        "isBase64Encoded": False,
        "body": str(ans),
        "headers": {"Content-Type": "application/json"},
    }
`;
const example = `
{
    "axis": 0, // 0为行拼接;1为列拼接
    "data": [
        [
            [1,2,3],
            [2,3,4]
        ],
        [
            [5,6,7],
            [6,7,8]
        ],
        [
            ["a","b","c"],
            ["d","e","f"]
        ]
    ]
}`;
const result = `
[['1', '2', '3'],
['2', '3', '4'],
['5', '6', '7'],
['6', '7', '8'],
['a', 'b', 'c'],
['d', 'e', 'f']]`;

export default {
  code,
  example,
  result,
};
</script>

<style></style>
