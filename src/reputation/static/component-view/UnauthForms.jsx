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
        console.log(props.Register);
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
            <div class="container">
                <div class="row">
                    <div class="col-4">
                 
                    </div>
                    <div class="col-4">
                        {display}
                    </div>
                </div>
                       
            </div>


        )
    }
}