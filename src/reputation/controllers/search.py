from reputation import app, mongo
from flask import render_template, session, redirect, url_for, jsonify, json, request
from bson import json_util
import os 

@app.route('/post/searchPeople/', methods=['POST'])
def getPeople():
    request_dict = request.get_json()
    if 'SearchTerm' in request_dict:
        User = mongo.db.users
        print(request_dict['SearchTerm'])
        users = list(User.find({'$or':[{'firstName': {'$regex':request_dict['SearchTerm'],'$options':'i'}},{'familyName': {'$regex':request_dict['SearchTerm'],'$options':'i'}}]}))
        return json.dumps(users, default=json_util.default);
