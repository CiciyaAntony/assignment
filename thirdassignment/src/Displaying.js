import React,{Component} from 'react';
import Productlist from './productlist.js';
import TypeofProduct from './typeofproduct.js';

export default class Displaying extends Component{


  render()
    { let flag = 0;
      let flag1=0;
      let c = 0;
      let text = this.props.text;
      const check = this.props.check;
      const prod =   this.props.products;
      const sports = [];
      const electronics =[];
      prod.forEach((products)=>{
      text = text.toLowerCase();
      let name = products.name.toLowerCase();
      if(!(name.includes(text)))
        {
        return;
        }
      if(!products.inStock && check)
       {
        return;
       }
     if(products.type==="Sports")
      {
        if(flag ===0)
        {
          sports.push(<TypeofProduct category={products.type}/>);
          sports.push(<Productlist products={products}/>);
          flag=1;
        }
        else
        {
         sports.push(<Productlist products={products}/>);}
        }
        if(products.type==="Electronics"){
        {
          if(flag1===0)
          {
              electronics.push(<TypeofProduct category={products.type}/>);
              electronics.push(<Productlist products={products}/>);
              flag1=1;
          }
          else{
            electronics.push(<Productlist products={products}/>);
          }
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
    <tr align="Left">{sports}</tr>
    <tr align="Left">{electronics}</tr>
    </tbody>
    </table>
    </div>
   );
 }
}
