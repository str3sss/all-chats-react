import React from 'react';
import userIcon from '../img/usericon.svg';

const UserMessage = ({ message = `Hi!`, loading }) => {

  let classnames = 'usermessage'

  if (loading) {
    classnames = `usermessage usermessagewaiting`
  } else {
    classnames = 'usermessage'
  }

  return (
    <div className={classnames}>
      <div>
        <img
          alt="Me"
          srcSet={userIcon}
          src={userIcon}
          width="30"
          height="30"
          decoding="async"
          data-nimg="1"
          className="usericon"
        />
      </div>
      <div className="markdownanswer">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default UserMessage;
