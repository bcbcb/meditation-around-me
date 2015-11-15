import React from "react";

export default class Tab extends React.Component{  
  render(){
    return (
      <span onClick={ ()=>{this.props.filterDay(this.props.day)} }>
      	{this.props.day + " "}
      </span>
    );
  }
}