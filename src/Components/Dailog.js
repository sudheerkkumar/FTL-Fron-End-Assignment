import React from 'react';
import ReactDOM from 'react-dom';
import UserComponent from './UserComponent.js'

// Dailog Component to display activity data
class Dailog extends React.Component {
    render(){
        return(
          
        <div className={this.props.show ? 'dailog' : ' dailog display-none'}>
            <section className='dailog-content'>
            <span className="close" onClick={this.props.closeView}
              >&times;
              </span>
              <div className='user-Content'>
                 <UserComponent member={this.props.currentMember} activeDays={this.props.activeDays}/>
              </div>
              <button type="button" className="btn btn-primary" onClick={this.props.closeView}>
              Close
              </button>
            </section>
          </div>
        )
    }
}

export default Dailog;