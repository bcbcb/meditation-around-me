import React from "react";
import Tab from "./Tab";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "All"];

export default class Tabs extends React.Component{  

  render(){
    return (
      <div>
        {days.map( (day,i) => <Tab day={day} key={i} filterDay={this.props.filterDay}/>)}
      </div>
    );
  }
}
