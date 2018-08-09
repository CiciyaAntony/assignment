import React,{Component} from 'react';
import Searching from './Searching';
import Displaying from './Displaying';

const data = [
 {
   name: 'FootBall',
   price: '$49.99',
   inStock: true,
   type: 'Sports'
 },
 {
   name: 'BaseBall',
   price: '$9.99',
   inStock: true,
   type: 'Sports'
 },
 {
   name: 'BasketBall',
   price: '$29.99',
   inStock: false,
   type: 'Sports'
 },
 {
   name: 'iPod Touch',
   price: '$99.99',
   inStock: true,
   type: 'Electronics'
 },
 {
   name: 'iPhone 5',
   price: '$399.99',
   inStock: false,
   type: 'Electronics'
 },
 {
   name: 'Nexus 7',
   price: '$199.99',
   inStock: true,
   type: 'Electronics'
 },
];

export default class App extends Component{

  render(){
    return(
      <Example products={data}/>
    );

  }
}
class Example extends Component{
  constructor(props){
    super(props);
    this.state={
      text:'',
      check:false
    };
    this.handleChange= this.handleChange.bind(this);
    this.handleClick= this.handleClick.bind(this);
  }

  handleClick(item)
  {
      this.setState({check:item});
  }
  handleChange(arg)
  {
    this.setState({text:arg});

  }
  render(){
    return(
      <div>
      <Searching
          text = {this.state.text}
          check = {this.state.check}
          clicked = {this.handleClick}
          changed = {this.handleChange}
/>

<Displaying products={this.props.products}
text={this.state.text}
 check={this.state.check}/>
</div>
    );
  }

}
