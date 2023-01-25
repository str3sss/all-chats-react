import React from 'react';
import twittericon from '../img/twittericon.svg';

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://twitter.com/uselesslab" target="_blank" rel="noreferrer">
        <img src={twittericon} />  
      </a>
      &nbsp;&nbsp;
      <a href="https://twitter.com/uselesslab" className='twitter-url'>twitter.com/uselesslab</a>
    </div>
  );
};

export default Footer;
