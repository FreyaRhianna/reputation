import React from 'react';
import Axios from 'axios';
import BaseProfile from './personal-profile-view/BaseProfile';
import BaseSearchWall from './search-page-view/BaseSearchWall';

export default class Dashboard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            Profile: true,
            Search: null
        }
        this.search = this.search.bind(this);
        this.returnHome = this.returnHome.bind(this);
    }
    
    search(){
        this.setState({Profile:false,Search:this.searchTerm.value.trim()})
    }
    
    returnHome(){
        this.setState({Profile:true,Search:null})
    }

    logout(){
        Axios.get('get/logout/').then(function(data){
            window.location = "/"
        })
    }

    render(){
        let MainDisplay = null;
        if(this.state.Profile){
            MainDisplay= <BaseProfile />
        }else{
            MainDisplay = <BaseSearchWall SearchTerm={this.state.Search} />
        }
        return( 
            <div>
                <nav className="navbar navbar-dark bg-primary justify-content-between">
                    <a className="navbar-brand">Reputation</a>
                    <div className="form-inline">
                          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" ref={(ele) => this.searchTerm = ele}/>
                          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.search} >Search</button>
                    </div>
                    
                    <div className="form-inline">
                        <button className="btn btn-outline-info my-2 my-sm-0" onClick={this.returnHome} >Home</button>
                        <button className="btn btn-outline-info my-2 my-sm-0" onClick={this.logout} >Logout</button>
                    </div>
                </nav> 
                {MainDisplay}
            </div>
        )
    }
}
