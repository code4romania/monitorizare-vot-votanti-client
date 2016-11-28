import React from 'react';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import { getIncidentsAction } from './actions';
import { getIncidents } from './selectors';
import { connect } from 'react-redux';
import Title from './components/title';
import Filters from './components/filters';
import IncidentItem from './components/incidentItem';
import Loading from 'components/Loading';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export class Sesizari extends React.PureComponent {
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
      imgSrc: ev.currentTarget.nextSibling.src,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.handleClose}
      />,
    ];
    if (this.props.incidents.data) {
      return (
        <div>
          <Helmet
            title="Sesizări - Monitorizare Vot"
            meta={[
              { name: 'description', content: 'Sesizări' },
            ]}
          />
          <Title />
          <Filters />
          <section className="container">
            <div className="row">
              <div className="col-xs-12 showIncidentsCount" style={{ textAlign: 'center' }}>
                <h2 style={{ color: '#2D2D2D' }}>{this.props.incidents.paginator.total} sesizari inregistrate</h2>
              </div>
              {this.props.incidents.data.map((tile, index) => (
                <div className="col-xs-6 col-md-4">
                  <IncidentItem {...tile} key={index} handleOpen={this.handleOpen} />
                </div>
              ))}
            </div>
          </section>
          <div>
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
        </div>
      );
    }
    return <Loading />;
  }
}

Sesizari.propTypes = {
  incidents: React.PropTypes.object,
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

export default connect(mapStateToProps, mapDispatchToProps)(Sesizari);
