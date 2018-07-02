import React from 'react';
import "../../component-style/Portrait.css";

export default class Portrait extends React.Component{
    constructor(props){
        super(props);

    }
    

    
    
    render(){
        return(
            <div>
                <img className="portrait" src="/dist/assets/img/profile.jpg" />
            </div>
        )
    }
}