import React from 'react';
import MessagesStats from './components/MessagesStats';
import MessageTypeSelector from './components/MessageTypeSelector';

export class Messages extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <MessagesStats />
        <MessageTypeSelector />
      </div>
    );
  }
}
