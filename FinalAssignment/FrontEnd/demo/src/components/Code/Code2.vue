<script>
const code = `# -*- coding:utf-8 -*-
import json
import numpy as np
import base64


def handler(event, context):
    encodedBody = event["body"]
    decodedBody = base64.b64decode(encodedBody).decode()
    jsonBody = json.loads(decodedBody)

    return {
        "statusCode": 200,
        "isBase64Encoded": False,
        "body": str(max(jsonBody)),
        "headers": {"Content-Type": "application/json"},
    }
`;
const example = "[5,20,10]";
const result = "20";

export default {
  code,
  example,
  result,
};
</script>

<style></style>
