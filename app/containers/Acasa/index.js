import React from 'react';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { getIncidentsAction } from './actions';
import { getIncidents } from './selectors';
import Hero from './MainContainer/components/hero';

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
        <Hero />
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1 style={{ textAlign: 'center' }}>Olivia. Ce facem aici? vreau niste visuals interesante :)</h1>
            </div>
          </div>
        </div>
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
