import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div className="col-md-12">
        <Header {...this.props.location} />
        {React.Children.toArray(this.props.children)}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  location: React.PropTypes.object,
};
