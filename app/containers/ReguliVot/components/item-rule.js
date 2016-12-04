import React from 'react';
import styled from 'styled-components';
import Icons from 'components/Icons';

const RuleWrapper = styled.div`
  cursor: pointer;
`;

function ItemRule(props) {
  return (
    <div className="col-sm-4 col-lg-3 rule">
      <div
        id={props.id}
        onTouchTap={props.selectItem}
        className={props.activeTab === props.id ? 'rule-item active' : 'rule-item'}
      >
        <RuleWrapper>
          <Icons icon={props.icon} />
          <strong>{props.titlu}</strong>
        </RuleWrapper>
      </div>
    </div>
  );
}

ItemRule.propTypes = {
  id: React.PropTypes.number,
  activeTab: React.PropTypes.number,
  titlu: React.PropTypes.string,
  icon: React.PropTypes.string,
  selectItem: React.PropTypes.func,
};

export default ItemRule;
