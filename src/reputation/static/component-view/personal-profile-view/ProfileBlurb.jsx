import React from 'react';
import Axios from 'axios';

import "../../component-style/ProfileBlurbStyle.css";
import Portrait from './Portrait';

export default class ProfileBlurb extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userDetails:{
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
        Axios.get('get/userData/')
        .then(function(response){
            _this.setState({userDetails: response.data});
        })
    }

    
    
    render(){
        return(
            <div>
                <table className="table table-bordered table-striped blurb-table">
                    <tbody>
                        <tr>
                            <td colSpan="2">
                                <Portrait />
                            </td>
                        </tr>
                        <tr>
                            <td>First Name(s): </td>
                            <td>{this.state.userDetails.firstName}</td>
                        </tr>
                        <tr>
                            <td>Surname: </td>
                            <td>{this.state.userDetails.familyName}</td>
                        </tr>
                        <tr>
                            <td>Nationality: </td>
                            <td>{this.state.userDetails.nationality}</td>
                        </tr>
                        <tr>
                            <td>Date Of Birth: </td>
                            <td>{this.state.userDetails.db}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}