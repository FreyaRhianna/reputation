from reputation import app, mongo
from flask import render_template, session, redirect, url_for, jsonify, json
from bson import json_util
import os 

@app.route('/get/userData/', methods=['GET'])
def getIndividualUserData():
    if 'email' in session:
        User = mongo.db.users
        user = User.find_one({'email':session['email']})
        return json.dumps(user, default=json_util.default);
