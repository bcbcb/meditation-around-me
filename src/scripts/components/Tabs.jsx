import React from "react";

export default class Tabs extends React.Component{
  render(){
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "All"];
    return (
      <div>
        {days.map(day => <span onClick={(day) => this.props.filterDay(day)}>{day} </span>)}
      </div>
    );
  }
}
