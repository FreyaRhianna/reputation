import React from 'react';
import ReputationScore from './ReputationScore';

export default class BaseProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    

    render(){
        return(
            <div>
                Profile
                <ReputationScore />
            </div>
        )
    }
}