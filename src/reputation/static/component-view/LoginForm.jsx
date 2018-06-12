import React from 'react';
import Axios from 'axios';

export default class LoginForm extends React.Component{

    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }
    
    login(){
        Axios.post('post/login/',{
            
        })
        .catch(function(error){
            console.log(error);
        })
    }


    render(){
        return( 
            <form>
              <div className="form-group">
                <label className="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
           
              <button className="btn btn-primary" onClick={this.login}>Login</button>
            </form>
        )
    }
}