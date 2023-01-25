import React from 'react';
import boticon from '../img/boticon.svg';

const Header = () => {
  return (
    <div className="topNav">
      <div className="navLogo">
          <img
            alt="AI"
            srcSet={boticon}
            src={boticon}
            width="30"
            height="30"
            decoding="async"
            data-nimg="1"
            className="boticon"
          />
        <div>
        <a href="/">
        ARBITRUM DOCS AI SEARCH
        </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
