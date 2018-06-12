import React from 'react';
import Axios from 'axios';
import ErrorMessage from './ErrorMessage';

export default class RegisterForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            Error: null
        }
        this.register = this.register.bind(this);
        this.validate = this.validate.bind(this);
    }
    
    register(){
        var _this = this;
        if(this.validate()){
            Axios.post('post/register/',{
                email: this.userEmail.value.trim(),
                password: this.userPassword.value
            })
            .then(function (response){
              if(response.data.errorOccured){
                  _this.setState({Error: response.data.errorMessage})
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
            console.log(this.userEmail.value.trim());
            this.setState({Error: "You need to give an email"});
            return false;
        }else if(this.userPassword.value.trim() == ""){
            this.setState({Error: "You need to choose a password"});
            return false;
        }else if(this.userPassword.value != this.userPasswordConf.value){
            this.setState({Error : "Passwords do not match"});
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
                    <input type="email"
                        className="form-control" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email" 
                        ref={(ele) => this.userEmail = ele} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password" 
                        ref={(ele) => this.userPassword = ele}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="passwordConfirm" 
                        placeholder="Password" 
                        ref={(ele) => this.userPasswordConf = ele}/>
                </div>
                <button style={{marginBottom: 20 + 'px'}} className="btn btn-primary" onClick={this.register}>Register</button>
                {Alert}
            </div>
        )
    }
}