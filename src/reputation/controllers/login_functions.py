from reputation import mongo, app
from flask import session, redirect, url_for


@app.route('/post/register/', methods=['POST'])
def register():    
    User = mongo.db.users
    existing_user = User.find_one({'username' : 'Test'})
    
    if existing_user is None:
        User.insert({'username': 'Test',
                     'id' : 1,
                     'password': password
                    })
                 
@app.route('/post/login/',methods= ['POST'])
def login():
    print("logged in!")
    session['username'] = 'Jarv'
    return redirect(url_for('hello_world'))
                 

@app.route('/get/logout', methods =['GET'])
def logout():
    session.clear()
    return redirect(url_for('hello_world'))