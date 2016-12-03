import React from 'react';
import styled from 'styled-components';
import Icons from 'components/Icons';

const FooterWrap = styled.div`
  background: #fff;
  border-top: 1px solid #fdda44;
  padding: 40px 0;
`;

export default function Footer() {
  return (
    <FooterWrap>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Icons icon="mv" />
            some footer content here
          </div>
        </div>
      </div>
    </FooterWrap>
  );
}
