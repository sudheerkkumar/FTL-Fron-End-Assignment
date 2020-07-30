import React from 'react';
import ReactDOM from 'react-dom';
import Cal from './Cal.js'

// User component to display the details of the selcted user in dailog box.
class UserComponent extends React.Component{
 
    render(){
        let member = this.props.member
        return(
            <div>
            <div className="user-component container">
            <dl class="row">
                <dt class="col-sm-3">ID</dt>
                <dd class="col-sm-9">{member.id}</dd>
                <dt class="col-sm-3">NAME</dt>
                <dd class="col-sm-9">{member.real_name}</dd>
                <dt class="col-sm-3">LOCATION</dt>
                <dd class="col-sm-9">{member.tz}</dd>
            </dl>
            </div>
            <Cal activityPeriods={member.activity_periods} activeDays={this.props.activeDays}/>
            <div>
           
            </div>
            </div>

        )
    }
}

export default UserComponent