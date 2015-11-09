import React from "react";
import Header from "./Header";
import Table from "./Table";
import Tabs from "./Tabs";
import data from "json!../../../data.json";

export default class App extends React.Component{
  constructor(){
      super();
      this.state = {
        "entries": data.entries,
        "filteredEntries": data.entries
      };
  }

  filterDay(day){
    let filtered = this.state.entries.filter(entry => entry.when.day === day);
    this.setState({
      "filteredEntries": filtered
    });
  }

  render(){
    return (
      <div>
        <Header />
        <Table filteredEntries={this.state.filteredEntries} />
        <Tabs filterDay={this.filterDay.bind(this)} />
      </div>
    )
  }
}
