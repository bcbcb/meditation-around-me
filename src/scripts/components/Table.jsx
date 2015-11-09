import React from "react";
import Entry from "./Entry";

export default class Table extends React.Component{
  render(){
    return (
      <table>
        {this.props.filteredEntries.map(entry => <Entry {...entry} />)}
      </table>
    )
  }
}
