import React from "react";
import Header from "./Header";
import Table from "./Table";
import data from "json!../../../data.json";

export default class App extends React.Component{
  constructor(){
      super();
      this.state = {
        "entries": data.entries
      };
  }

  render(){
    return (
      <div>
        <Header />
        <Table entries={this.state.entries} />
      </div>
    )
  }
}
