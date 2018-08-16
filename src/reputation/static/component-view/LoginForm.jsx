import React from 'react';
import Axios from 'axios';
import ErrorMessage from './ErrorMessage';

export default class LoginForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            Error: null
        }
        this.login = this.login.bind(this);
        this.validate = this.validate.bind(this);
    }

    login(){
        var _this = this;
        if(this.validate()){
            Axios.post('post/login/',{
                email: this.userEmail.value.trim(),
                password: this.userPassword.value
            })
            .then(function(response){
                console.log(response);
                if(response.data.errorOccured){
                  _this.setState({Error: response.data.errorMessage})
                }else{
                    window.location = "/"
                }
            })
            .catch(function(error){
                console.log(error);
            })
        }
    }

    validate(){
        this.setState({Error: null})
        if(this.userEmail.value.trim() == ""){
            this.setState({Error: "Email cannot be left empty"});
            return false;
        }else if (this.userPassword.value.trim() == ""){
            this.setState({Error: "Password cannot be left empty"});
            return false;
        }
        return true;
    }


    render(){
        var Alert;
        if(this.state.Error){
            Alert = <ErrorMessage message={this.state.Error}/>
        }else{
            Alert = null;
        }
        return(
            <div>
              <div className="form-group">
                <label className="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"
                ref={(ele) => this.userEmail = ele} />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                ref={(ele) => this.userPassword = ele} />
              </div>

              <button style={{marginBottom: 20 + 'px'}} className="btn btn-primary" onClick={this.login}>Login</button>
              {Alert}
            </div>
        )
    }
}
