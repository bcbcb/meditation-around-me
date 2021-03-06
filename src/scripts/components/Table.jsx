import React from "react";
import Entry from "./Entry";

export default class Table extends React.Component{
  render(){
    return (
      <table>
      	<tbody>
        {this.props.filteredEntries.map((entry,i) => <Entry {...entry} key={i}/>)}
        </tbody>
      </table>
    )
  }
}
