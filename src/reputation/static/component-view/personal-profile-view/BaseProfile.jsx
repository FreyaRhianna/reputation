import React from 'react';
import "../../component-style/BaseProfileStyle.css";
import ReputationScore from './ReputationScore';
import ProfileBlurb from './ProfileBlurb';

export default class BaseProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    

    render(){
        return(
            <div className="profile-header-container">
                <ProfileBlurb />
                <ReputationScore />
            </div>
        )
    }
}