import React,{Component} from 'react';


export default class TypeofProduct extends Component{
render()
{ const category = this.props.category;
  
  return(
    <tr>
    <th>{category}</th>
    </tr>
  );

}


}
