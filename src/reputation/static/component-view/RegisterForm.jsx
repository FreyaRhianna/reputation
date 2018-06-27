import React from 'react';
import Axios from 'axios';
import ErrorMessage from './ErrorMessage';

export default class RegisterForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            Error: []
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
              window.location = "/"
            })
            .catch(function(error){
                console.log(error);
            })
        }
    }

    validate(){
        let valid = true;
        this.state.Error = [] 
        if(this.userEmail.value.trim() == ""){
            console.log(this.userEmail.value.trim());
            this.state.Error.push("You need to give an email");
            valid = false;
        }
        if(this.userFirstName.value.trim() == ""){
            this.state.Error.push("You need to provide your first name");
            valid = false;
        }
        if(this.userFamilyName.value.trim() == ""){
            this.state.Error.push("You need to provide your family name");
            valid = false;
        }
        if(this.userDb.value.trim() == ""){
            this.state.Error.push("You need to provide your date of birth");
            valid = false;
        }
        if(this.userNationality.value.trim() == ""){
            this.state.Error.push("You need to provide your nationality name");
            valid = false;
        }
        if(this.userPassword.value.trim() == ""){
            this.state.Error.push("You need to choose a password");
            valid = false;
        }
        if(this.userPassword.value != this.userPasswordConf.value){
            this.state.Error.push("Passwords do not match");
            valid = false;
        }
        this.setState({Error:this.state.Error})
        return valid;
    }

    render(){
        var Alert;
        if(this.state.Error.length >= 1){
            Alert = <div>
                        {this.state.Error.map((message,index)=>
                                             <ErrorMessage message={message}/>
                                             )}
                    </div>
                
        }else{
            Alert = null;
        }
        return( 
            <div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email"
                        className="form-control" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email" 
                        ref={(ele) => this.userEmail = ele} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>First Name(s)</label>
                    <input type="text"
                        className="form-control" 
                        id="firstName" 
                        aria-describedby="firstNameHelp" 
                        placeholder="Enter your first name and any middle name(s)" 
                        ref={(ele) => this.userFirstName = ele} />
                </div>
                <div className="form-group">
                    <label>Family Name</label>
                    <input type="text"
                        className="form-control" 
                        id="familyName" 
                        aria-describedby="familyNameHelp" 
                        placeholder="Enter your family name" 
                        ref={(ele) => this.userFamilyName = ele} />
                </div>
                <div className="form-group">
                    <label>Date Of Birth</label>
                    <input type="text"
                        className="form-control" 
                        id="db" 
                        aria-describedby="dbHelp" 
                        placeholder="DD/MM/YYYY" 
                        ref={(ele) => this.userDb = ele} />
                </div>
                <div className="form-group">
                    <label>Nationality</label>
                    <input type="text"
                        className="form-control" 
                        id="nationality" 
                        aria-describedby="familyNameHelp" 
                        placeholder="Enter your family name" 
                        ref={(ele) => this.userNationality = ele} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password" 
                        ref={(ele) => this.userPassword = ele}/>
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
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