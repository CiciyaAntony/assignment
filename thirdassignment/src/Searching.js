import React,{Component} from 'react';

export default class Searching extends Component{
  constructor(props){
    super(props);

    this.handleChange= this.handleChange.bind(this);
    this.handleClick= this.handleClick.bind(this);
  }


handleClick(y)
{
  this.props.clicked(y.target.checked)
}
handleChange(x)
{
  this.props.changed(x.target.value);

}
render()
{
    return(
      <div>
    <input type ="text" placeholder = "search"  value={this.props.text} onChange={this.handleChange}/>
    <br/>
    <input type="checkbox" checked={this.props.check} onClick = {this.handleClick}/>Show products in stock
      </div>
    );
  }
}
