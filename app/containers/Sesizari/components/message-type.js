import React from 'react';
import styled from 'styled-components';

const MessageWrapper = styled.div`
  background: #E5E5E5;
  textAlign: center;
  borderRadius: 2px;
  marginRight: 20px;
  paddingTop: 5px;
  paddingBottom: 5px;
  color: purple;
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;
function MessageType(props) {
  let classNames = 'col-sm-2 col-lg-2';
  if (props.id === props.activeTab) {
    classNames = classNames.concat(' activeTab');
  }
  return (
    <MessageWrapper className={classNames} onClick={props.selectItem} id={props.id}>
      <strong>{props.title}</strong>
    </MessageWrapper>
  );
}

MessageType.propTypes = {
  id: React.PropTypes.number,
  activeTab: React.PropTypes.number,
  title: React.PropTypes.string,
  selectItem: React.PropTypes.func,
};

export default MessageType;
