import React from "react";

class BreadCustom extends React.Component{
  constructor(props){
    super(props);

    this.onAdd = this.onAdd.bind(this);

    this.state = {
      value: [1,3,5]
    }
  }

  onAdd(){
    let _val = this.state.value;
    _val = _val.map(i => i*2);
    this.setState({
      value: _val
    })
  }
  render(){
    return (
      <div>
        <button onClick={this.onAdd}>{this.props.name}</button>
        <ul className="react-ul">
        {this.state.value.map((i) => {
          return (
            <li key={i.toString()}> {i}</li>
          )
        })}
          
        </ul>
        
      </div>
    )
  }
}

export default BreadCustom;