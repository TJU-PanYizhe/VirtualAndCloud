from email.mime import base
import json
import base64

print("Hello World!")

encodedObj = "eyJhcnIiOlsxLDIsMyw0LDZdfQ=="
decodedObj = base64.b64decode(encodedObj).decode()
print(decodedObj)
print(repr(decodedObj))
print(repr(json.loads(decodedObj)))
print(json.dumps(decodedObj))
print(json.loads(decodedObj)["arr"])

print("-------")

a = '{"arr":[1,2,3,4,6]}'
print(a)
print(json.loads(a))

# print("-------")

# b = "{'arr':[1,2,3,4,6]}"
# print(b)
# print(json.loads(b))
