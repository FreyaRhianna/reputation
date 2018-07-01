import React from 'react';
import '../../component-style/PersonSearch.css'

export default class PersonResult extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Details:props.personData
        }
    }
    
    

    

    render(){
        return(
            <div className="person-blurb">
                <span> {this.state.Details.familyName}</span>
                <span> {this.state.Details.firstName}</span>
                <span> {this.state.Details.nationality}</span>
                <span> {this.state.Details.db}</span>
            </div>
        )
    }
}