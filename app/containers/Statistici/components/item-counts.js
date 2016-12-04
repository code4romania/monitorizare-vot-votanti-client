import React from 'react';
import styled from 'styled-components';
import * as _ from 'lodash';

const Title = styled.h2`
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function ItemCounts(props) {
  return (
    <div className="row">
      <div className="col-xs-12">
        <Title className="item-title">{_.first(props.counts).incidentsCount} {_.first(props.counts).countyName}</Title>
        {_.tail(props.counts).map((item, index) =>
          <div key={index}>
            <Title className="item-title">{item.countyName} ( {item.incidentsCount} )</Title>
          </div>
        )}
      </div>
    </div>
  );
}

ItemCounts.propTypes = {
  counts: React.PropTypes.array,
};
