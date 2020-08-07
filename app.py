from flask import Flask
import json, requests
app = Flask(__name__)

@app.route('/')
def home():
  return 'Hello World!', 200

@app.route('/api/clients', methods=['GET'])
def get_clients():

    try:
        r = requests.get('https://europe-west2-mpx-tools-internal.cloudfunctions.net/frontend-mock-api/clients')
    except requests.exceptions.RequestException as e:
        raise SystemExit(e)
        
    clients = r.json()

    return json.dumps(clients), 200

@app.route('/api/clients/<int:client_id>', methods=['GET'])
def get_profile(client_id):

    try:
        r = requests.get('https://europe-west2-mpx-tools-internal.cloudfunctions.net/frontend-mock-api/clients/'+str(client_id))
    except requests.exceptions.RequestException as e:
        raise SystemExit(e)

    client_profile = r.json()

    return json.dumps(client_profile), 200




