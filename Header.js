import React from 'react';
import './Header.css';
const Header=function(props){
    return(
    <div className="header">
            {props.heading}
            </div>
    )
}

export default Header;//load the content of header where it gets imported