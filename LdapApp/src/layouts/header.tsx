import React, { useState } from 'react';
import "./../styles/Header.css";
import LinkIcon from '@material-ui/icons/Link';
import CancelIcon from '@material-ui/icons/Cancel';

const header = () => {
    return (
        <div className="header">
          <div>Manage LDAP Configurations <span className="link"><LinkIcon color="primary"/> <CancelIcon color="primary"/></span></div>
          
        </div>
      );
}

export default header;