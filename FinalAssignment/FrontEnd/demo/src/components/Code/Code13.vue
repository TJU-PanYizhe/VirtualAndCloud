<script>
const code = `# -- coding:utf-8 --
import json
import numpy as np
import base64


def handler(event, context):
    encodedBody = event["body"]
    decodedBody = base64.b64decode(encodedBody).decode()
    jsonBody = json.loads(decodedBody)
    list1 = []
    for i in jsonBody:
        list1.append((i - min(jsonBody)) / (max(jsonBody) - min(jsonBody)))
    return {
        "statusCode": 200,
        "isBase64Encoded": False,
        "body": str(list1),
        "headers": {"Content-Type": "application/json"},
    }
`;
const example = `[3,4,1,2,0]`;
const result = `
[0.75, 1.0, 0.25, 0.5, 0.0]`;

export default {
  code,
  example,
  result,
};
</script>

<style></style>
