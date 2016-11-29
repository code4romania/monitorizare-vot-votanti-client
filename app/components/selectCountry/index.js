import React from 'react';
import MapRo from './map-ro.png';
import MapWorld from './map-world.png';

const inactive = {
  opacity: '0.6',
  outline: 'none',
};

const active = {
  outline: 'none',
};

const inlineBlock = {
  display: 'inline-block',
  padding: '3px',
  cursor: 'pointer',
};

export default function SelectCountry(props) { // eslint-disable-line react/nostate
  return (
    <div className="row">
      <div className="col-md-6">
        <button style={props.active ? active : inactive} onClick={props.setActiveOption} data-name="romania" >
          <img style={inlineBlock} width={50} src={MapRo} role="presentation" />
          <div style={inlineBlock}>In Romania</div>
        </button>
      </div>
      <div className="col-md-6">
        <button style={props.active ? inactive : active} onClick={props.setActiveOption} data-name="world" >
          <img style={inlineBlock} width={50} src={MapWorld} role="presentation" />
          <div style={inlineBlock}>In Disapora</div>
        </button>
      </div>
    </div>
  );
}

SelectCountry.propTypes = {
  active: React.PropTypes.bool,
  setActiveOption: React.PropTypes.func,
};
