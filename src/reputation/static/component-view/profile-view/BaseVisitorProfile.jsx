import React from 'react';
import Axios from 'axios';

import "../../component-style/BaseVisitorProfileStyle.css";
import ReputationScore from './ReputationScore';
import ProfileBlurb from './ProfileBlurb';
import MakePromise from './MakePromise';

export default class BaseProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            UserDetails:{
                firstName: null,
                familyName:null,
                nationality:null,
                db:null
            },
            VisitorProfileTerm:props.VisitorProfileTerm
        }

        this.fetchUserData = this.fetchUserData.bind(this);
        this.fetchUserData();
    }

    componentWillReceiveProps(props){
      this.setState({VisitorProfileTerm:props.VisitorProfileTerm});
    }

    fetchUserData(){
        var _this = this;
        Axios.post('get/userData/',{
            Email: this.state.VisitorProfileTerm
        })
        .then(function(response){
            _this.setState({UserDetails: response.data.personalData});
        })
    }


    render(){
        return(
            <div>
                <div className="profile-header-container">
                    <ProfileBlurb UserDetails={this.state.UserDetails} />
                    <ReputationScore />

                </div>
                <MakePromise />
            </div>

        )
    }
}
