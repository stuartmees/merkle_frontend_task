from flask import Flask
import json, requests
app = Flask(__name__)

@app.route('/')
def home():
  return 'Hello World!', 200

@app.route('/api/clients', methods=['GET'])
def get_clients():

    print('in get_clients still')

    r = requests.get('https://europe-west2-mpx-tools-internal.cloudfunctions.net/frontend-mock-api/clients')

    clients = r.json()

    print(clients)

    return json.dumps(clients), 200