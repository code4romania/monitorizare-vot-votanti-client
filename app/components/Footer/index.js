import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.div`
  background: #fff;
  border-top: 1px solid #ffcc00;
  padding: 40px 0;
`;

export default function Footer() {
  return (
    <FooterWrap>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            some footer content here
          </div>
        </div>
      </div>
    </FooterWrap>
  );
}
