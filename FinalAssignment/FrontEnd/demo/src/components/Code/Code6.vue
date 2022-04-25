<script>
const code = `# -*- coding:utf-8 -*-
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
`;
const example = `
{
    "data": [1.936,4.656,3.074,4.7767],
    "bitcount": 2
}`;
const result = `
[
    1.94 4.66 3.07 4.78
]`;

export default {
  code,
  example,
  result,
};
</script>

<style></style>
