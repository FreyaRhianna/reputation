import React from 'react';
import Axios from 'axios';
import BaseProfile from './personal-profile-view/BaseProfile';

export default class Dashboard extends React.Component{

    constructor(props){
        super(props);
    }

    logout(){
        Axios.get('get/logout/').then(function(data){
            window.location = "/"
        })
    }

    render(){
        return( 
            <div>
                <nav className="navbar navbar-dark bg-dark justify-content-between">
                    <a className="navbar-brand">Reputation</a>
                    <div className="form-inline">
                        <button className="btn btn-outline-info my-2 my-sm-0" onClick={this.logout} >Logout</button>
                    </div>
                </nav> 
                <BaseProfile />
            </div>
        )
    }
}
