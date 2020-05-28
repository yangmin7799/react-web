import React from "react";

class SyncData extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: "123"
    }
  }

  handleCchange(){

  }

  handleFchange(){

  }

  render(){

    return (
    <div>{this.state.value}</div>
    )
  }
}

export default SyncData;