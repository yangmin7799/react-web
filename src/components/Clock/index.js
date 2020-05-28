import React from "react";

class Clock extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      time: new Date()
    }
  }

  componentDidMount(){
    // 
    this.timer = setInterval(this.onChange.bind(this),1000);
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  onChange(){
    this.setState({
      time: new Date()
    })
  }

  render(){
    return (
    <div>{this.props.address}时间:{this.state.time.toLocaleTimeString()}</div>
    )
  }
}

export default Clock;