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
                <span> {this.state.Details.Surname}</span>
                <span> {this.state.Details.Firstname}</span>
                <span> {this.state.Details.Nationality}</span>
                <span> {this.state.Details.db}</span>
            </div>
        )
    }
}