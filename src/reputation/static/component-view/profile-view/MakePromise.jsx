import React from 'react';
import Axios from 'axios';
import "../../component-style/MakePromise.css";

export default class MakePromise extends React.Component{
    constructor(props){
        super(props);

        this.registerPromise = this.registerPromise.bind(this)
    }

    registerPromise(){
      const { registerPromise } = this.props;
      registerPromise(this.promiseTerms.value.trim());

    }

    render(){
        return(
            <div className="input-group promise-form">
                <textarea className="promise-input form-control" ref={(ele) => this.promiseTerms = ele} />
                <span className="input-group-btn">
                    <button className="btn btn-info promise-btn" onClick={this.registerPromise}> Promise</button>
                </span>
            </div>
        )
    }
}
