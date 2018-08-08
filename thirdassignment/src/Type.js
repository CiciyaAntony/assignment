import React,{Component} from 'react';

export default class Type extends Component{
  render()
  {
     const cate = this.props.type;
    return(
      <div>
      {cate}
      </div>
    );
  }
}
