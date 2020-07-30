import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
import ShowActivity from './ShowActivity.js'

// Calendar component to display the react-datepicker
class Cal extends React.Component {

    state = {
        startDate: new Date(),
        dateClicked: false,
        highlightWithRanges : []
      };

    handleChange = date => {
        this.setState({
          startDate: date,
          dateClicked: true
        });
      };

   render() {
       return (
           <div class="datePicker">
          <DatePicker
                selected={this.state.startDate}
                onSelect={this.handleSelect} //when day is clicked
                onChange={this.handleChange} //only when value has changed
                showMonthDropdown // Show Month Dropdown in calendar
               highlightDates={this.props.activeDays} //Marks user activity days on Calender view
                />
         <div> 
           {(this.state.dateClicked)?
            <ShowActivity 
            act={this.props.activityPeriods}
            target ={this.state.startDate.toDateString()} /> :
           ""}</div>
           </div> 

       )

   }
}
export default Cal;