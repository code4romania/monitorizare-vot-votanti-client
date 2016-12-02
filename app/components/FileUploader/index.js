import React from 'react';
import CameraAlt from 'material-ui/svg-icons/image/camera-alt';

const wrapperStyles = {
  width: '100%',
  padding: '14px 0',
  border: '2px dashed #D7A323',
  margin: '10px 0',
  cursor: 'pointer',
};
const inputStyles = {
  width: 0,
  opacity: 0,
  cursor: 'pointer',
};
const iconStyles = {
  width: '100%',
  height: '40px',
  color: '#9E6D53',
};
const textStyles = {
  display: 'block',
  textAlign: 'center',
  color: '#9E6D53',
};

export default function FileUploader() {
  return (
    <label htmlFor="upload">
      <div style={wrapperStyles}>
        <input type="file" id="upload" accept="image/*" style={inputStyles} />
        <CameraAlt style={iconStyles} />
        <span style={textStyles}>Incarca o poza</span>
      </div>
    </label>
  );
}
