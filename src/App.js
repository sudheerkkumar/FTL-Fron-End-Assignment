import React from 'react';
import ReactDOM from 'react-dom';
import UserListComponent from './Components/UserListComponent.js'
import Dailog from './Components/Dailog.js'

class App extends React.Component {
 constructor(props){
   super(props)
   this.state = {
     members : [],//Members from Moke API
     show : false, // Handle to display dailog
     currentMember: '', // Selected member from the Users List
     activeDays: '', // ActiveDays of the select member to represent on the calendar
   }
 }

 // Expands the dailog view
 expandView = (e) => {
   this.setState({show: true, currentMember:e})
   this.checkAcitivty(e)
 }

 // Close the dailog view
 closeView = () => {
   this.setState({show: false})
 }

 // e : Select member
 // Setstate with active days of the selected member
 checkAcitivty = (e) => {
  const activeDays = []
  e.activity_periods.map((period) => {
      const a = period.start_time.split(" ")
      const d = new Date(a[2]+"-"+a[0]+"-"+a[1])
      activeDays.push(d)
  })
  this.setState({activeDays : activeDays})
}

 render(){
    return(
       <div class="mainBox">
       <ul className = "list-group">
       <li><h3 class = "list-group-item-active">Users List</h3></li>
       {this.state.members.map((member, index) => {
         return(<UserListComponent key={index}
           member ={member} 
           expandView={this.expandView}
            show={this.state.show}
           />)
       })}</ul>
      <Dailog show={this.state.show} 
      closeView={this.closeView}
      currentMember = {this.state.currentMember}
      activeDays = {this.state.activeDays}
      />
      </div>
    )
 }

 componentDidMount() {
  fetch('https://safe-shelf-07159.herokuapp.com/members')
  .then(res => res.json())
  .then((data) => {
    this.setState({ members: data })
    console.log(data)
  })
  .catch(console.log)
}
}

export default App;
