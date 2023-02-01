import React from 'react';
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import { MdHome } from "@react-icons/all-files/md/MdHome";
import { MdSearch } from "@react-icons/all-files/md/MdSearch";
import { MdLibraryMusic } from "@react-icons/all-files/md/MdLibraryMusic";

function Sidebar() {
  return (
    <div className='sidebar'>
        <img className='sidebar__logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify Logo"/>
        <SidebarOption Icon={MdHome} title="Home" />
        <SidebarOption Icon={MdSearch} title="Search" />
        <SidebarOption Icon={MdLibraryMusic} title="Your Library" />
    </div>
  )
}

export default Sidebar;