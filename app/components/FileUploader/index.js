import React from 'react';
import styled from 'styled-components';
import CameraAlt from 'material-ui/svg-icons/image/camera-alt';

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 0;
  border: 1px dashed #D7A323;
  border-radius: 4px;
  cursor: pointer;
  margin: 13px 0 0;
`;

const inputStyles = {
  width: 0,
  opacity: 0,
  cursor: 'pointer',
};
const iconStyles = {
  width: '100%',
  height: '32px',
  color: '#5F288D',
  opacity: '0.6',
};
const Label = styled.div`
  display: block;
  text-align: center;
  color: #5F288D;
  opacity: 0.6;
  position: relative;

  small {
    position: absolute;
    top: -36px;
    right: 10px;
    font-size: 12px;
    font-weight: 300;
    text-transform: lowercase;
  }
`;

const getFileName = (file) => file && file.name;

export default function FileUploader(props) {
  return (
    <label htmlFor="upload">
      <Wrapper>
        <input type="file" id="upload" accept="image/jpeg, image/png" style={inputStyles} onChange={props.upload} />
        <CameraAlt style={iconStyles} />
        <Label>
          { getFileName(props.file) || 'Încarcă o poză*' }
          <small>* Optional</small>
        </Label>
      </Wrapper>
    </label>
  );
}

FileUploader.propTypes = {
  upload: React.PropTypes.func,
  file: React.PropTypes.object,
};
