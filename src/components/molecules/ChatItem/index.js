import React from 'react';
import IsMe from './IsMe';
import Other from './Other';

const ChatItem = ({isme, text, date, photo}) => {
  if (isme) {
    return <IsMe text={text} date={date} />;
  }
  return <Other text={text} date={date} photo={photo} />;
};

export default ChatItem;
