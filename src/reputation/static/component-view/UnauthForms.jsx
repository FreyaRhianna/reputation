import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default class UnauthDash extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            Register: props.Register
        }

    }
    
    componentWillReceiveProps(props){
        this.setState({Register: props.Register})
    }
    

    render(){
        var display;
        if(this.state.Register){
            display = <RegisterForm />
        }else{
            display = <LoginForm />
        }
        return( 
            <div className="container">
                <div className="row">
                    <div className="col-4">
                 
                    </div>
                    <div className="col-4">
                        {display}
                    </div>
                </div>
                       
            </div>


        )
    }
}