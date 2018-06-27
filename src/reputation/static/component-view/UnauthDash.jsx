import React from 'react';
import UnauthForms from './UnauthForms';

export default class UnauthDash extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            Register: false
        }
        this.registerView = this.registerView.bind(this);
        this.loginView = this.loginView.bind(this);
    }
    
    registerView(){
        this.setState({Register: true});
    }
    
    loginView(){
        this.setState({Register:false});
    }

    render(){
 
        return( 
            <div>
                <nav className="navbar navbar-dark bg-primary justify-content-between">
                  <a className="navbar-brand">Reputation</a>
                  <div className="form-inline">
                    <button className="btn btn-outline-info my-2 my-sm-0" onClick={this.loginView} >Login</button>
                    <button className="btn btn-outline-info my-2 my-sm-0" onClick={this.registerView} >Register</button>
                  </div>
                </nav>
              
                <UnauthForms 
                    Register={this.state.Register}    
                    />
                       
            </div>


        )
    }
}
