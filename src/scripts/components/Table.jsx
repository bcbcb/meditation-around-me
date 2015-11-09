import React from "react";
import Entry from "./Entry";

export default class Table extends React.Component{
  render(){
    return (
      <table>
        {this.props.entries.map(entry => <Entry {...entry} />)}
      </table>
    )
  }
}
