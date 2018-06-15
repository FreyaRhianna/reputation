import React from 'react';
import "../../component-style/ReputationScoreStyle.css";

import {PieChart, Pie, Sector, ResponsiveContainer, Cell} from 'recharts'

export default class ReupationScore extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    
    componentWillReceiveProps(props){
        this.setState({Message:props.message});
    }
    
    
    
    render(){

        const data01 = [{name: 'GoodRep', value: 100, color:"#82ca9d"},
                            {name: 'BadRep', value: 300, color:'#ff5252'}]
        return(
            <div className="rep-graph-container">
                <ResponsiveContainer>
                    <PieChart width={730} height={250}>
                     <Pie stroke="none" data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={170} outerRadius={210} label>
                        {data01.map((entry,index) => <Cell fill={entry.color} />)}
                             label />
                    </Pie>
                         
                    </PieChart>
                  </ResponsiveContainer>
                <span className="reputation-label">Reputation Score</span>
            </div>
        )
    }
}