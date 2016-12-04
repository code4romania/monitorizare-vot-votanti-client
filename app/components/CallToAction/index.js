import React from 'react';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
  height: '60px',
  backgroundColor: '#5F288D',
  color: '#ffffff',
};

const buttonOverlayStyle = {
  height: '60px',
};

const buttonLabelStyle = {
  lineHeight: '60px',
  fontSize: '16px',
  letterSpacing: '1px',
};

export default class CallToAction extends React.PureComponent {
  browseToSesizari() {
    browserHistory.push('/sesizari');
  }
  render() {
    return (
      <div className="cta-wrap">
        <RaisedButton
          label={this.props.label}
          labelPosition="before"
          className="button"
          primary
          buttonStyle={buttonStyle}
          overlayStyle={buttonOverlayStyle}
          labelStyle={buttonLabelStyle}
          icon={this.props.icon}
          onClick={this.browseToSesizari}
        />
      </div>
    );
  }
}

CallToAction.propTypes = {
  label: React.PropTypes.string,
  icon: React.PropTypes.object,
};
