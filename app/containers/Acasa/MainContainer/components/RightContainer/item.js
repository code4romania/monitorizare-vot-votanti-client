/* eslint prefer-template: 0 */

import React from 'react';
// import { Avatar } from 'material-ui/Avatar';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import styled from 'styled-components';

const IncidentWrap = styled.div`
  .incident-card {
    margin: 0 0 20px;
  }

  .incident-image {
    height: 100px;
    overflow: hidden;
    cursor: pointer;
  }
`;

const CardTitleStyle = {
  paddingBottom: '0',
};

function IncidentItem(props) {
  return (
    <div className="col-xs-12 col-sm-6">
      <IncidentWrap>
        <Card className="incident-card">

          { /* TODO: avatar = Avatar module with svg icon slug */ }
          <CardHeader
            title={props.incidentType.name}
            avatar="http://www.fillmurray.com/400/400"
          />

          { /* TODO: add zoom icon on image */ }

          <CardMedia onTouchTap={props.handleOpen} className="incident-image">
            <img src="https://placekitten.com/300/300" role="presentation" />
          </CardMedia>

          <CardTitle
            style={CardTitleStyle}
            title={`Sectia ${props.precinct.precinctNumber}`}
            subtitle={`${props.county.name}, ${props.city.name}`}
          />

          <CardText>
            Astonishment a very small stage in a vast cosmic arena, vanquish the impossible network of wormholes a still more glorious dawn awaits realm of the galaxies, vastness is bearable only through love!
            {props.description}
          </CardText>
        </Card>
      </IncidentWrap>
    </div>

  );
}

IncidentItem.propTypes = {
  // avatar: React.PropTypes.string, // need avatar icon slug here // incidentType.icon ?
  description: React.PropTypes.string,
  city: React.PropTypes.object,
  precinct: React.PropTypes.object,
  name: React.PropTypes.string,
  // image_url: React.PropTypes.string,
  incidentType: React.PropTypes.object,
  county: React.PropTypes.object,
  handleOpen: React.PropTypes.func,
};

export default IncidentItem;
