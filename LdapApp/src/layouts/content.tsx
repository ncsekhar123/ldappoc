import React, { useState } from 'react';
import "./../styles/Content.css";
import Table from "../components/dataTable";
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Menu from '../container/menu';

const Content = () => {

    const [show, setShow]= useState(false);

    const onClickHandler = () =>{
        
        setShow(!show);
    }

    return (
        <div className="Content">
            <div>
               <span className="Column">Drag a column name here to group the items by the value within that column.</span>
               <span className="eye">
               <Tooltip title="Menu list">
                <IconButton aria-label="menu list">
                <RemoveRedEyeIcon color='primary' onClick={onClickHandler}/> 
                </IconButton>
              </Tooltip>
              <Tooltip title="Add list">
                <IconButton aria-label="Add list">
                <AddCircleIcon color='primary'/> 
                </IconButton>
              </Tooltip></span>
            </div>
            <Table/>
            
            <Menu show={show}/>
          
        </div>
      );
}

export default Content;