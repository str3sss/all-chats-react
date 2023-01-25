import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import parrotIcon from '../img/boticon.svg';

const ApiMessage = ({ message = `Hi there! How can I help?` }) => {
  if (typeof message !== String) {
    message = <ReactMarkdown linkTarget={'_blank'}>{message}</ReactMarkdown>
  }

  return (
    <div className="apimessage">
      <img
        alt="AI"
        srcSet={parrotIcon}
        src={parrotIcon}
        width="30"
        height="30"
        decoding="async"
        data-nimg="1"
        className="boticon"
      />
      <div className="markdownanswer">
        {message}
      </div>
    </div>
  );
};

export default ApiMessage;
