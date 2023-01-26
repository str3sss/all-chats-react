import React, { useEffect, useRef } from 'react'
import ApiMessage from './ApiMessage'
import UserMessage from './UserMessage'

const MessageList = ({history, loading}) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [history])


  
  return (
    <div className="cloud">
          <div className='messagelist' ref={messagesEndRef} >
            <ApiMessage />
            {history.map((mes, index) => {
                if (index % 2 === 0) {
                  return <UserMessage message={mes}  key={index} loading={loading} />
                } else {
                  return <ApiMessage message={mes} key={index}/>
                }
            })}
          </div>
        </div>
  )
}

export default MessageList