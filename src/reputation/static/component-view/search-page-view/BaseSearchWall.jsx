import React from 'react';
import PersonResult from './PersonResult.jsx';

export default class BaseSearchWall extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    
    

    

    render(){
        var personData = {
            Firstname: 'Freya',
            Surname: 'Sheer',
            Nationality: 'British',
            db: '11/11/1998'
        }
        return(
            <div >
                <PersonResult  personData={personData} />
                <PersonResult  personData={personData} />
                <PersonResult  personData={personData} />
            </div>
        )
    }
}