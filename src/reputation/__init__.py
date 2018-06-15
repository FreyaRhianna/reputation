from flask import Flask
from flask_pymongo import PyMongo
from web3 import Web3, HTTPProvider

    
app = Flask(__name__, static_folder="static/dist", template_folder="static")
app.config['MONGO_DBNAME'] = 'reputation'
app.config['TEMPLATES_AUTO_RELOAD'] = True
app.secret_key = 'somethingdifferentlater'

web3 = Web3(HTTPProvider('http://localhost:8545'));
web3.eth.defaultAccount = web3.eth.accounts[0]
mongo = PyMongo(app)

if app:
    print(web3.eth.accounts[0])
    import reputation.controllers.index
    import reputation.controllers.login_functions

