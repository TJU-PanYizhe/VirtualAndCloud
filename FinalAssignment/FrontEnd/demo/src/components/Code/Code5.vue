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
        "body": str(Counter(jsonBody)),
        "headers": {"Content-Type": "application/json"},
    }
`;
const example = `[1,2,3,3,4,4,4,5]`;
const result = `
Counter({
    3: 2,
    1: 1,
    2: 1,
    4: 1
})`;

export default {
  code,
  example,
  result,
};
</script>

<style></style>
