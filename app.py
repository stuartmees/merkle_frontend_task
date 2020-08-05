from flask import Flask
import json, requests
app = Flask(__name__)

@app.route('/')
def home():
  return 'Hello World!', 200

@app.route('/api/clients', methods=['GET'])
def get_clients():

    r = requests.get('https://europe-west2-mpx-tools-internal.cloudfunctions.net/frontend-mock-api/clients')

    clients = r.json()

    print(clients)

    return json.dumps(clients), 200

@app.route('/api/clients/<int:client_id>', methods=['GET'])
def get_profile(client_id):

    r = requests.get('https://europe-west2-mpx-tools-internal.cloudfunctions.net/frontend-mock-api/clients/'+str(client_id))

    client_profile = r.json()

    print(client_profile)

    return json.dumps(client_profile), 200


