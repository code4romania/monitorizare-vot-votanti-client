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
`;
function MessageType(props) {
  let classNames = 'col-sm-2 col-lg-1';
  if (props.id === props.activeTab) {
    classNames = classNames.concat(' selected');
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
