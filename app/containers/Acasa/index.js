import React from 'react';
import Helmet from 'react-helmet';
import MainContainer from './MainContainer/index';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { getIncidentsAction } from './actions';
import { getIncidents } from './selectors';
import Hero from './MainContainer/components/hero';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

export class Acasa extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
    const actions = [
      <RaisedButton
        label="Cancel"
        secondary
        className="button"
        onTouchTap={this.handleClose}
      />,
    ];
    return (
      <div>
        <Helmet
          title="Monitorizare Vot"
          meta={[
            { name: 'description', content: 'Acasa' },
          ]}
        />
        <Hero />
        <MainContainer
          {...this.props}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
        />
        <Dialog
          title=""
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <img role="presentation" src={this.state.imgSrc} />
        </Dialog>
      </div>
    );
  }
}

Acasa.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Acasa);
