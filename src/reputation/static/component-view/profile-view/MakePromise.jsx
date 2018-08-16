import React from 'react';
import "../../component-style/MakePromise.css";

export default class MakePromise extends React.Component{
    constructor(props){
        super(props);

    }
    

    
    
    render(){
        return(
            <div className="input-group promise-form">
                <textarea className="promise-input form-control" />
                <span className="input-group-btn">   
                    <button className="btn btn-info promise-btn"> Promise</button>
                </span>
            </div>
        )
    }
}