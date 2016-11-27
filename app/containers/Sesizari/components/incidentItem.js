import React from 'react';
import { GridTile } from 'material-ui/GridList';
const gridTileStyle = {
  WebkitBoxShadow: '0 0 12px -1px rgba(0, 0, 0, 0.30)',
  MozBoxShadow: '0 0 12px -1px rgba(0, 0, 0, 0.30)',
  boxShadow: '0 0 12px -1px rgba(0, 0, 0, 0.30)',
};

const cardHeader = {
  width: '100%',
  display: 'inline-block',
  marginLeft: '10px',
  height: '50px',
  padding: '10px',
};

const cardHeaderIcon = {
  background: '#5F288D',
  padding: '5px',
  borderRadius: '50%',
  color: 'white',
  float: 'left',
  marginRight: '10px',
};

const imageContainer = {
  height: '100px',
  overflow: 'hidden',
  postition: 'relative',
};

const imageContainerIcon = {
  position: 'absolute',
  left: '45%',
  color: 'white',
  fontSize: '4rem',
  marginTop: '20px',
  cursor: 'pointer',
};

const footerContainer = {
  position: 'absolute',
  bottom: '0',
  height: '60px',
  width: '100%',
  paddingTop: '10px',
  marginBottom: '10px',
  borderTop: '1px solid rgb(216, 216, 216)',
};

function IncidentItem(props) {
  return (
    <GridTile
      key={props.img}
      title={props.title}
      style={gridTileStyle}
    >
      <div style={cardHeader}>
        <i className="material-icons" style={cardHeaderIcon}>&#xE530;</i>
        <div>{props.incidentType.name}</div>
      </div>
      <div style={imageContainer}>
        <i style={imageContainerIcon} onTouchTap={props.handleOpen} className="material-icons">&#xE8FF;</i>
        <img style={{ width: '100%' }} src={props.image_url} role="presentation" />
      </div>
      <p style={{ padding: '10px' }}>{props.description}</p>
      <div style={footerContainer}>
        <div style={{ paddingLeft: '10px' }}><i style={{ fontSize: '2.5rem', color: '#5F288D', float: 'left' }} className="material-icons">&#xE55F;</i></div>
        <div style={{ marginLeft: '30px' }}>{props.name} / Sectia {props.station_number}</div>
        <div style={{ marginLeft: '30px', fontSize: '14px', color: 'grey' }}>{props.city.name}/{props.county.name}</div>
      </div>
    </GridTile>
  );
}

IncidentItem.propTypes = {
  img: React.PropTypes.string,
  description: React.PropTypes.string,
  city: React.PropTypes.object,
  station_number: React.PropTypes.string,
  name: React.PropTypes.string,
  image_url: React.PropTypes.string,
  title: React.PropTypes.string,
  incidentType: React.PropTypes.object,
  county: React.PropTypes.object,
  handleOpen: React.PropTypes.func,
};

export default IncidentItem;
