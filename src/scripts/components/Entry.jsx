import React from "react";

export default class Entry extends React.Component{
  render(){
    let { location, address, leader, when } = {...this.props};
    return (
      <tr>
        <td>{location}</td>
        <td>{address}</td>
        <td>{leader}</td>
        <td>{when.day}</td>
        <td>{when.time}</td>
      </tr>
    )
  }
}
