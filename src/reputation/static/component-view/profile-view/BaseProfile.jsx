import React from 'react';
import Axios from 'axios';

import "../../component-style/BaseProfileStyle.css";
import ReputationScore from './ReputationScore';
import ProfileBlurb from './ProfileBlurb';

export default class BaseProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            UserDetails:{
                firstName: null,
                familyName:null,
                nationality:null,
                db:null
            }      
        }
        
        this.fetchUserData = this.fetchUserData.bind(this);
        this.fetchUserData();
    }
    
    fetchUserData(){
        var _this = this;
        Axios.get('get/userPersonalData/')
        .then(function(response){
            _this.setState({UserDetails: response.data});
        })
    }
    
    

    

    render(){
        return(
            <div className="profile-header-container">
                <ProfileBlurb UserDetails={this.state.UserDetails} />
                <ReputationScore />
            </div>
        )
    }
}