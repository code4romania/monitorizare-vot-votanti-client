import React from 'react';
import styled from 'styled-components';
import Icons from 'components/Icons';

const RuleWrapper = styled.div`
  cursor: pointer;
`;

const active = {
  background: '#5F288D',
  color: '#ffffff',
};

function Rule(props) {
  return (
    <div>
      <div
        id={props.id}
        style={props.activeTab === props.id ? active : {}}
        onTouchTap={props.selectItem}
      >
        <RuleWrapper>
          <Icons icon={props.icon} />
          <div>{props.titlu}</div>
        </RuleWrapper>
      </div>
    </div>
  );
}

Rule.propTypes = {
  id: React.PropTypes.number,
  activeTab: React.PropTypes.number,
  titlu: React.PropTypes.string,
  icon: React.PropTypes.string,
  selectItem: React.PropTypes.func,
};

export default Rule;
