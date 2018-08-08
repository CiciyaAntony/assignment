import React,{Component} from 'react';
import Productlist from './productlist.js';
//import Type from'./Type';

export default class Displaying extends Component{


  render()
    {
      const text = this.props.text;
      const check = this.props.check;
      const prod =   this.props.products;
    const sport = [];
    const electroni =[];
    prod.forEach((products)=>{
 if(products.name.indexOf(text)===-1)
 {
   return;
 }
 if(!products.inStock && check)
 {
   return;
 }
      if(products.type==="Sports")
      {
        sport.push(<Productlist products={products}/>);
      }
      if(products.type==="Electronics"){
        {
          electroni.push(<Productlist products={products}/>);
        }
      }
    }

    );
  return(
    <div>
    <table>
    <tbody>
    <tr align="Left">
    <th>Name</th>
    <th>Price</th>
    </tr>
    <tr align="Left">
    <th>Sporting Goods</th></tr>
    <tr align="Left">{sport}</tr>
    <tr align="Left">
    <th>Electronics</th></tr>
    <tr align="Left">{electroni}</tr>

</tbody>
    </table>
    </div>
  );}
}
