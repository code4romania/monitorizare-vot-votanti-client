import React from 'react';
import Helmet from 'react-helmet';
import HeroPre from './MainContainer/components/hero-pre';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  handleOpen = (ev) => {
    this.setState({
      open: true,
      imgSrc: ev.currentTarget.querySelector('img').src,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  render() {
    return (
      <div>
        <Helmet
          title="Monitorizare Vot"
          meta={[
            { name: 'description', content: 'Acasa' },
          ]}
        />
        <HeroPre />
      </div>
    );
  }
}

export default HomePage;
