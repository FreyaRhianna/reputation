import React from 'react';
import Axios from 'axios';

export default class RegisterForm extends React.Component{

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
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Confirm Password</label>
                    <input type="password" className="form-control" id="passwordConfirm" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        )
    }
}