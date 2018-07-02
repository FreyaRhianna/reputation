from reputation import app, mongo
from flask import render_template, session, redirect, url_for, jsonify, json, request
from bson import json_util
import os 

@app.route('/get/userPersonalData/', methods=['GET'])
def getPersonalUserData():
    if 'email' in session:
        User = mongo.db.users
        user = User.find_one({'email':session['email']})
        return json.dumps(user, default=json_util.default);

@app.route('/get/userData/', methods=['POST'])
def getIndividualVisitorUserData():
    request_dict = request.get_json()
    if 'Email' in request_dict:
        User = mongo.db.users
        user = User.find_one({'email':request_dict['Email']})
        return json.dumps(user, default=json_util.default);
