import React from 'react';

// Activity component to show activiy 
// details of the selcted user
class ShowActivity extends React.Component {

    render(){
        var acts = this.props.act;
        var target = this.props.target;
        var times = []

        // Get the activities of the selected date.
        acts.map((period) => {
            const a = period.start_time.split(" ")
            const b = period.end_time.split(" ")
            const d = new Date(a[2]+"-"+a[0]+"-"+a[1])
            const p = d.toDateString()
            if(p == target){
                times.push(a[a.length-1] +" "+b[b.length-1])
            }
        })

        return(
            <div className="event-list">
            <div className={(times.length>0)?'message':'message display-none'}> Activty Data on {target}</div>
            {(times.length>0)?
             times.map((t) => {
                 var times = t.split(' ')
                return(
                 <li>
                     <div><span className="firstBox">{''}</span>
                    <span className="secondBox">{times[0] +'  -  '+times[1]}</span>
                     </div>
                 </li>)
             }):
            <div>No Activity on this date </div>}
            </div>
        )
    }
}
export default ShowActivity