import React,{Component} from 'react';

export default class Productlist extends Component{
  render(){
    const products = this.props.products;
    //console.log(products);
  var name;

    if(products.inStock)
    {
       name=products.name;

    }
    else
      {
       name=<span style ={{color:'red'}} >{ products.name}</span>
      }

    return(



<tr>
    <td>{name}</td>
    <td>{products.price}</td>
  </tr>



    );

  }
}
