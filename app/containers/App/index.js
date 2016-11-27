import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div className="wrap">
        <Header {...this.props.location} />

        <div className="container">
          {React.Children.toArray(this.props.children)}
        </div>

        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  location: React.PropTypes.object,
};
