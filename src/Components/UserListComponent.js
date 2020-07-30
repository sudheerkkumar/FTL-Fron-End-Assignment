import React from 'react';
import ReactDOM from 'react-dom';
import Dailog from './Dailog.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component to display the Users
class UserListComponent extends React.Component{  
    render(){
        return(
            <li key={this.props.index} class="list-group-item list-group-item-action"
            onClick={()=>this.props.expandView(this.props.member)}>
            {this.props.member.real_name}
            </li>
        )
    }
}

export default UserListComponent;