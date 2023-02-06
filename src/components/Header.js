import React from 'react';
import './Header.css';
import { MdSearch } from '@react-icons/all-files/md/MdSearch';
import { useDataLayerValue } from '../DataLayer';

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header__left">
        <MdSearch />
        <input
          placeholder="Search for Artists, Songs, or Podcasts"
          type="text"
        />
      </div>
      <div className="header__right">
        <img className="avatar" src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
