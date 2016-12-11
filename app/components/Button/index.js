/**
 *
 * Button.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { PropTypes } from 'react';

const styles = {
  general: {
    width: '100%',
    cursor: 'pointer',
    webkitBorderRadius: '0px',
    webkitAppearance: 'none',
  },
};

function Button(props) {
  return (
    <div style={props.style}>
      <button disabled={props.disabled} style={styles.general}>
        {props.text}
      </button>
    </div>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string,
  style: PropTypes.object,
};

export default Button;
