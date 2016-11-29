import React from 'react';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import { getIncidentsAction } from './actions';
import { getIncidents, getPagination, getNextPage } from './selectors';
import { connect } from 'react-redux';
import Title from './components/title';
import Filters from './components/filters';
import IncidentItem from './components/incidentItem';
import Loading from 'components/Loading';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const buttonStyle = {
  backgroundColor: '#5F288D',
  color: 'white',
  padding: '0 25px',
  height: '50px',
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
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.handleClose}
      />,
    ];
    if (this.props.incidents.length > 0) {
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
                <h2 style={{ color: '#2D2D2D' }}>{this.props.pagination.total} sesizari inregistrate</h2>
              </div>
              {this.props.incidents.map((tile, index) => (
                tile.createdAt ?
                  <div className="col-xs-12 col-md-3" key={index} >
                    <IncidentItem {...tile} key={index} handleOpen={this.handleOpen} />
                  </div>
                : null
              ))}
            </div>
            <RaisedButton
              label={this.props.nextPage !== this.props.pagination.lastPage ? 'Vezi toate sesizarile' : 'Nu mai sunt sesizari'}
              labelPosition="before"
              backgroundColor="#5F288D"
              primary
              icon={this.props.nextPage !== this.props.pagination.lastPage ? <ChevronRight /> : ''}
              buttonStyle={buttonStyle}
              disabled={this.props.nextPage === this.props.pagination.lastPage}
              onClick={this.loadNextIncidents}
            />
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
