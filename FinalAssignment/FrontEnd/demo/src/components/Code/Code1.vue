<script>
const code = `# -*- coding:utf-8 -*-
import json
import numpy as np
import base64


def handler(event, context):
    encodedBody = event["body"]
    decodedBody = base64.b64decode(encodedBody)
    jsonBody = json.loads(decodedBody)
    print(jsonBody)
    decodedBody = decodedBody.decode()

    print(np.mean(jsonBody))

    return {
        "statusCode": 200,
        "isBase64Encoded": False,
        "body": str(np.mean(jsonBody)),
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
