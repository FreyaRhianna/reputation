import React from 'react';


import "../../component-style/ProfileBlurbStyle.css";
import Portrait from './Portrait';

export default class ProfileBlurb extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            UserDetails:props.UserDetails
        }
    }
    
    componentWillReceiveProps(props){
        this.setState({UserDetails:props.UserDetails});
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
                            <td>{this.state.UserDetails.firstName}</td>
                        </tr>
                        <tr>
                            <td>Surname: </td>
                            <td>{this.state.UserDetails.familyName}</td>
                        </tr>
                        <tr>
                            <td>Nationality: </td>
                            <td>{this.state.UserDetails.nationality}</td>
                        </tr>
                        <tr>
                            <td>Date Of Birth: </td>
                            <td>{this.state.UserDetails.db}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}