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
                 
    if 'password' not in request_dict:
        emsg = {'errorOccured' : True,
               'errorMessage' : "You need to choose a password"}
        return jsonify(msg)
    
    existing_user = User.find_one({'email' : request_dict['email']})

    
    print("made it")
    if existing_user is None:
        hashedPass = bcrypt.hashpw(request_dict['password'].encode('utf-8'), bcrypt.gensalt());
        User.insert({'email': request_dict['email'],
                     'password': hashedPass
                    });
        session['email'] = request_dict['email']
        return redirect(url_for('hello_world'))
    else:
        msg = {'errorOccured' : True,
               'errorMessage' : "An account is already registered with this email"}
        return jsonify(msg)
                 
@app.route('/post/login/',methods= ['POST'])
def login():
    User = mongo.db.users
    existing_user = User.find_one({'email' : request_dict['email']})
    if existing_user:
        hashedSuppliedPass = bcrypt.hashpw(request_dict['password'].encode('utf-8'), existing_user['password'].encode('utf-8'))
        if  hashedSuppliedPass == existing_user['password'].encode('utf-8'):
            session['email'] = request_dict['email']
            return redirect(url_for('hello_world'))
    return 'Invalid email or password'

@app.route('/get/logout', methods =['GET'])
def logout():
    session.clear()
    return redirect(url_for('hello_world'))