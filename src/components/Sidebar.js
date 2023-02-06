import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { MdHome } from 'react-icons/md/';
import { MdSearch } from 'react-icons/md/';
import { MdLibraryMusic } from 'react-icons/md/';
import { useDataLayerValue } from '../DataLayer';

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />
      <SidebarOption Icon={MdHome} title="Home" />
      <SidebarOption Icon={MdSearch} title="Search" />
      <SidebarOption Icon={MdLibraryMusic} title="Your Library" />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
