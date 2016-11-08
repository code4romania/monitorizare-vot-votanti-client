import React from 'react';
import Header from '../../components/Header';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div className="col-md-10 col-md-offset-1">
        <Header {...this.props.location} />
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}

App.propTypes = {
  location: React.PropTypes.object,
};
