from flask import Flask
from flask_pymongo import PyMongo
app = Flask(__name__, static_folder="static/dist", template_folder="static")
mongo = PyMongo(app)
if app:
    import reputation.controllers.index
