import React from 'react'
import Logo from '../../imgs/logo.png';
import "./Sidebar.css";
import { SidebarData } from '../../Data/Data';

const Sidebar = () => {
  return (
    <div className="sidebar">
    
          {/* logo */}
          <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      {/* manu */}

      <div className="menu">
        {Sidebar.map((item, index)=>{
            return(
                <div className="menuItem">
                    <item.icon/>
                </div>
            )
        })}
 
      </div>
    </div>
  )
}

export default Sidebar
