import React from 'react';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import { getIncidentsAction } from './actions';
import { getIncidents, getPagination, getNextPage } from './selectors';
import { connect } from 'react-redux';
import Hero from './components/hero';
import Filters from './components/filters';
import IncidentItem from './components/incidentItem';
import Loading from 'components/Loading';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import Refresh from 'material-ui/svg-icons/navigation/refresh';

const buttonStyle = {
  height: '60px',
};

const buttonOverlayStyle = {
  height: '60px',
};

const buttonLabelStyle = {
  lineHeight: '60px',
  fontSize: '16px',
  letterSpacing: '1px',
};

const buttonIconStyle = {
  color: '#ffffff',
};

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

  loadNextIncidents = () => {
    this.props.dispatchGetIncidents();
  }
  render() {
    const actions = [
      <RaisedButton
        label="Cancel"
        secondary
        className="button"
        onTouchTap={this.handleClose}
      />,
    ];
    if (this.props.incidents.length > 0 && this.props.counties.length > 0 && this.props.incidentTypes.length > 0) {
      return (
        <div>
          <Helmet
            title="Sesizări - Monitorizare Vot"
            meta={[
              { name: 'description', content: 'Sesizări' },
            ]}
          />
          <Hero />
          <Filters counties={this.props.counties} incidentTypes={this.props.incidentTypes} />
          <section className="container">
            <div className="row">
              <div className="col-xs-12 showIncidentsCount" style={{ textAlign: 'center' }}>
                <h2 style={{ color: '#2D2D2D' }}>{this.props.pagination.total} sesizari inregistrate</h2>
              </div>
              {this.props.incidents.map((tile, index) => (
                tile.createdAt ?
                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={index} >
                    <IncidentItem {...tile} key={index} handleOpen={this.handleOpen} />
                  </div>
                : null
              ))}
            </div>
            <div className="bottom-cta">
              <RaisedButton
                label={this.props.nextPage !== this.props.pagination.lastPage ? 'Nu mai sunt sesizări' : 'Încarcă mai multe sesizări'}
                buttonStyle={buttonStyle}
                overlayStyle={buttonOverlayStyle}
                labelStyle={buttonLabelStyle}
                labelPosition="after"
                primary
                icon={this.props.nextPage !== this.props.pagination.lastPage ? '' : <Refresh style={buttonIconStyle} />}
                disabled={this.props.nextPage !== this.props.pagination.lastPage}
                onClick={this.loadNextIncidents}
              />
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
  incidents: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
  counties: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
  incidentTypes: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
  dispatchGetIncidents: React.PropTypes.func,
  pagination: React.PropTypes.object,
  nextPage: React.PropTypes.number,
};

export function mapDispatchToProps(dispatch) {
  return {
    dispatchGetIncidents: () => dispatch(getIncidentsAction()),
  };
}

const mapStateToProps = createStructuredSelector({
  incidents: getIncidents(),
  pagination: getPagination(),
  nextPage: getNextPage(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sesizari);
