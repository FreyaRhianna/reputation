import React from 'react';

export default class ErrorMessage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Message : props.message
        }
    }
    
    componentWillReceiveProps(props){
        this.setState({Message:props.message});
    }
    
    
    
    render(){
        return(
            <div className="alert alert-danger" role="alert">
                {this.state.Message}
            </div>
        )
    }
}