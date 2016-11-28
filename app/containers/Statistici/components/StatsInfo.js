import React from 'react';
import styled from 'styled-components';

const LastUpdate = styled.p`
  font-size: 12px;
  color: #999;
  font-weight: 400;
`;

export default function StatsInfo() {
  return (
    <div className="row">
      <div className="col-xs-12 col-md-offset-2 col-md-8 page-hero">
        <h1>Statistici in timp real</h1>
        <p>Astonishment with pretty stories for which theres little good evidence, Cambrian explosion. Shores of the cosmic ocean Euclid, at the edge of forever intelligent beings, tingling of the spine Drake Equation vanquish the impossible, with pretty stories for which theres little good evidence descended.</p>
        <LastUpdate>Ultima actualizare a fos la 15:34:30 11 Decembrie 2016</LastUpdate>
      </div>
    </div>
  );
}
