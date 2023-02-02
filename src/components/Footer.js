import React from 'react';
import './Footer.css';
import { MdPlayCircleOutline } from '@react-icons/all-files/md/MdPlayCircleOutline';
import { MdSkipNext } from '@react-icons/all-files/md/MdSkipNext';
import { MdSkipPrevious } from '@react-icons/all-files/md/MdSkipPrevious';
import { MdShuffle } from '@react-icons/all-files/md/MdShuffle';
import { MdRepeat } from '@react-icons/all-files/md/MdRepeat';
import { MdRepeatOne } from '@react-icons/all-files/md/MdRepeatOne';
import { MdPlaylistPlay } from '@react-icons/all-files/md/MdPlaylistPlay';
import { MdVolumeDown } from '@react-icons/all-files/md/MdVolumeDown';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <p>Album and song details</p>
      </div>

      <div className="footer__center">
        <MdShuffle className="footer__green" />
        <MdSkipPrevious className="footer__icon" />
        <MdPlayCircleOutline fontSize="xx-large" className="footer__icon" />
        <MdSkipNext className="footer__icon" />
        <MdRepeat className="footer__green" />
      </div>

      <div className="footer__right">
        <MdPlaylistPlay />
        <MdVolumeDown />
        <p>Volume Controls</p>
      </div>
    </div>
  );
}

export default Footer;
