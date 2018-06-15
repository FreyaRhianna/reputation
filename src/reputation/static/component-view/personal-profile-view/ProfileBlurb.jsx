import React from 'react';
import "../../component-style/ProfileBlurbStyle.css";
import Portrait from './Portrait';

export default class ProfileBlurb extends React.Component{
    constructor(props){
        super(props);

    }
    

    
    
    render(){
        return(
            <div>
                
                <table className="table table-bordered blurb-table">
                    <tbody>
                        <tr>
                            <td colspan="2">
                                <Portrait />
                            </td>
                        </tr>
                        <tr>
                            <td>First Name(s): </td>
                            <td>Freya Rhianna</td>
                        </tr>
                        <tr>
                            <td>Surname: </td>
                            <td>Sheer Hardwick</td>
                        </tr>
                        <tr>
                            <td>Nationality: </td>
                            <td>English</td>
                        </tr>
                        <tr>
                            <td>Date Of Birth: </td>
                            <td>27/02/1997</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}