from reputation import mongo, app
from flask import session, redirect, url_for, request, jsonify, make_response
from flask_bcrypt import bcrypt


@app.route('/post/register/', methods=['POST'])
def register():  
    print("tried")
    
    User = mongo.db.users
    
    request_dict = request.get_json()
    
    if 'email' not in request_dict:
        msg = {'errorOccured' : True,
               'errorMessage' : "You need to supply an email"}
        return jsonify(msg)
    
    if 'firstName' not in request_dict:
        msg = {'errorOccured' : True,
              'errorMessage' : "You need to supply a first name"}
        return jsonify(msg)
    
    if 'familyName' not in request_dict:
        msg = {'errorOccured' : True,
              'errorMessage' : "You need to supply a family name"}
        return jsonify(msg)
    
    if 'db' not in request_dict:
        msg = {'errorOccured' : True,
              'errorMessage' : "You need to supply a date of birth"}
        return jsonify(msg)
    
    if 'nationality' not in request_dict:
        msg = {'errorOccured' : True,
              'errorMessage' : "You need to supply a nationality"}
        return jsonify(msg)
                 
        
    if 'password' not in request_dict:
        msg = {'errorOccured' : True,
               'errorMessage' : "You need to choose a password"}
        return jsonify(msg)
    
    existing_user = User.find_one({'email' : request_dict['email']})

    
    print("made it")
    if existing_user is None:
        hashedPass = bcrypt.hashpw(request_dict['password'].encode('utf-8'), bcrypt.gensalt());
        User.insert({'email': request_dict['email'],
                     'db' : request_dict['db'],
                     'firstName' : request_dict['firstName'],
                     'familyName' : request_dict['familyName'],
                     'nationality' : request_dict['nationality'],
                     'password': hashedPass
                    });
        session['email'] = request_dict['email']
        return redirect(url_for('index'))
    else:
        msg = {'errorOccured' : True,
               'errorMessage' : "An account is already registered with this email"}
        return jsonify(msg)
                 
@app.route('/post/login/',methods= ['POST'])
def login():
    User = mongo.db.users
    request_dict = request.get_json()
    
    if 'email' not in request_dict:
        msg = {'errorOccured' : True,
               'errorMessage' : "You need to supply an email"}
        return jsonify(msg)
                 
    if 'password' not in request_dict:
        msg = {'errorOccured' : True,
               'errorMessage' : "You need to supply a password"}
        return jsonify(msg)
    
    existing_user = User.find_one({'email' : request_dict['email']})
    if existing_user:
        hashedSuppliedPass = bcrypt.checkpw(request_dict['password'].encode('utf-8'), existing_user['password'])
        if  hashedSuppliedPass:
            session['email'] = request_dict['email']
            return redirect(url_for('index'))
    msg = {'errorOccured' : True,
           'errorMessage' : "The password or email you supplied doesn't match any registered account"}
    return jsonify(msg)

@app.route('/get/logout/', methods =['GET'])
def logout():
    session.clear()
    return redirect(url_for('index'))