<script>
const code = `# -*- coding:utf-8 -*-
import json
import numpy as np
import base64

def handler (event, context):

    encodedBody = event["body"]
    decodedBody = base64.b64decode(encodedBody).decode()
    jsonBody = json.loads(decodedBody)

    x = np.var(jsonBody)
    return {
        "statusCode": 200,
        "isBase64Encoded": False,
        "body": str(x),
        "headers": {
            "Content-Type": "application/json"
        }
    }
`;
const example = `
[1,3,7,9,4,0,-1,-3,-7,11,16]`;
const result = `
40.59504132231405`;

export default {
  code,
  example,
  result,
};
</script>

<style></style>
