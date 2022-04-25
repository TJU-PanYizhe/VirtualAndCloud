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
        "body": str(np.average(jsonBody["data"], weights=jsonBody["weight"])),
        "headers": {"Content-Type": "application/json"},
    }

`;
const example = `
{
    "data": [4,5,2,1,3],
    "weight": [1,1,1,3,2]
}
`;
const result = "2.5";

export default {
  code,
  example,
  result,
};
</script>

<style></style>
