import React from 'react';
import styled from 'styled-components';

const FiltersWrap = styled.section`
  background: #ffcc00;
  padding: 30px 0;
`;

function Filters() {
  return (
    <FiltersWrap>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            Filters
          </div>
        </div>
      </div>
    </FiltersWrap>
  );
}

export default Filters;
