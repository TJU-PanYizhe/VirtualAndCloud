<script>
const code = `# -*- coding:utf-8 -*-
import json
import numpy as np
import base64


def handler(event, context):

    encodedBody = event["body"]
    decodedBody = base64.b64decode(encodedBody).decode()
    jsonBody = json.loads(decodedBody)

    x = sorted(jsonBody)
    return {
        "statusCode": 200,
        "isBase64Encoded": False,
        "body": str(x),
        "headers": {"Content-Type": "application/json"},
    }

`;
const example = `
[1,5,2,-5,4,3,0,-1,-3]`;
const result = `
-5,-3,-1,0,1,2,3,4,5`;

export default {
  code,
  example,
  result,
};
</script>

<style></style>
