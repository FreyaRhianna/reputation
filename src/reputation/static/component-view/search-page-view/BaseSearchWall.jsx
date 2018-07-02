import React from 'react';
import Axios from 'axios';
import PersonResult from './PersonResult.jsx';

export default class BaseSearchWall extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            SearchTerm:props.SearchTerm,
            SearchResults :[]
        }
        this.collectResults = this.collectResults.bind(this);
        this.loadVisitorProfile = this.loadVisitorProfile.bind(this);
    }
    
    componentDidMount(){
        this.collectResults();
    }
    collectResults(){
        var _this = this;  
        Axios.post('post/searchPeople/', {
            SearchTerm: this.state.SearchTerm})
            .then(function (response){
                console.log("Update:" + response.data);
                _this.setState({SearchResults: response.data})
            })
            .catch(function(error){
                console.log(error);
            })
    }
    
    loadVisitorProfile(email){
        const { loadVisitorProfile } = this.props;
        loadVisitorProfile(email);
    }
    
    
    componentWillReceiveProps(props){
        this.state.SearchTerm = props.SearchTerm; //setState appeared to delay? async?
        this.collectResults();
    }
    

    render(){
        return(
            <div >
                {this.state.SearchResults.map((personData,index)=> <PersonResult  key={personData.familyName + personData.firstName} personData={personData}  loadVisitorProfile={this.loadVisitorProfile} />)}
            </div>
        )
    }
}