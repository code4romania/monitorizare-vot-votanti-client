import React from 'react';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { getIncidentsAction } from './actions';
import { getIncidents } from './selectors';
import HeroPre from './MainContainer/components/hero-pre';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    this.props.dispatchGetIncidents();
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

HomePage.propTypes = {
  dispatchGetIncidents: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    dispatchGetIncidents: () => dispatch(getIncidentsAction()),
  };
}

const mapStateToProps = createStructuredSelector({
  incidents: getIncidents(),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
