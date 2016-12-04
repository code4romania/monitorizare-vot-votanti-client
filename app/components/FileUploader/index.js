import React from 'react';
import CameraAlt from 'material-ui/svg-icons/image/camera-alt';

const wrapperStyles = {
  width: '100%',
  padding: '20px 0',
  border: '1px dashed #D7A323',
  borderRadius: '4px',
  margin: '20px 0px 30px',
  cursor: 'pointer',
};
const inputStyles = {
  width: 0,
  opacity: 0,
  cursor: 'pointer',
};
const iconStyles = {
  width: '100%',
  height: '32px',
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
