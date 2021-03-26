import React, {useState} from 'react';
import './../styles/More.css';

type MoreProps = {
  show: boolean,
}

const More = ({show}: MoreProps) => {

  
  if(!show)
  { 
      return (null);
  }
  return (
    <div className= "more">
       <div>Sync Now</div>
       <div>Delete</div>      
    </div>
  );
  
}

export default More;