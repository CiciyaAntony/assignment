import React,{Component} from 'react';

export default class Productlist extends Component{

  render(){
 let id =0;
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
    <td key={id++}>{name}</td>
    <td key={id++}>{products.price}</td>
  </tr>



    );

  }
}
