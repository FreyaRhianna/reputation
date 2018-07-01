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
        
    }
    
    componentDidMount(){
        this.collectResults();
    }
    collectResults(){
        var _this = this;  //appears to be called each time, but needs to be called twice for update?
        Axios.post('post/searchPeople/', {
            SearchTerm: this.state.SearchTerm})
            .then(function (response){
                _this.setState({SearchResults: response.data})
            })
            .catch(function(error){
                console.log(error);
            })
    }
    
    
    componentWillReceiveProps(props){
        this.setState({SearchTerm:props.SearchTerm});
        this.collectResults();
    }
    

    render(){
        return(
            <div >
                {this.state.SearchResults.map((personData,index)=> <PersonResult  key={personData.familyName + personData.firstName} personData={personData} />)}
            </div>
        )
    }
}