import React from 'react';
import './Footer.css';
import { MdPlayCircleFilled, MdSkipNext, MdSkipPrevious, MdShuffle, MdRepeat, MdRepeatOne, MdPlaylistPlay, MdVolumeDown } from 'react-icons/md/';
import 'toolcool-range-slider';


function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer__albumLogo" src="https://upload.wikimedia.org/wikipedia/en/7/74/Usher_-_Confessions_album_cover.jpg" alt="Usher - 2004 - Confessions" />
        <div className="footer_songInfo">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>

      <div className="footer__center">
        <MdShuffle className="footer__icon" />
        <MdSkipPrevious className="footer__icon" />
        <MdPlayCircleFilled fontSize="xx-large" className="footer__icon" />
        <MdSkipNext className="footer__icon" />
        <MdRepeat className="footer__icon" />
      </div>

      <div className="footer__right">
        <MdPlaylistPlay />
        <MdVolumeDown />
        <toolcool-range-slider min="100" max="200" value="150" step="1" pointer-border="none" pointer-border-hover="none" pointer-border-focus="none" pointer-bg="transparent" pointer-bg-hover="#ffffff" pointer-bg-focus="#1db954" pointer-width="15px" pointer-height="15px" pointer-radius="50px" slider-bg="#808080"
        slider-bg-hover="#1db954" slider-bg-fill="#ffffff"></toolcool-range-slider>
      </div>
    </div>
  );
}

export default Footer;
