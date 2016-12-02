import React from 'react';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { getStatsAction } from './actions';
import ListStats from './components/ListStats';
import StatsInfo from './components/StatsInfo';
import RaisedButton from 'material-ui/RaisedButton';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import { getStatsData } from './selectors';
import { createStructuredSelector } from 'reselect';
import Loading from 'components/Loading';

const styles = {
  buttonWrapper: {
    marginTop: '35px',
  },
};

export class Statistici extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.getStats();
  }
  browseToSesizari() {
    browserHistory.push('/sesizari');
  }
  render() {
    if (this.props.stats && this.props.stats.incidentsByCounty) {
      return (
        <div className="container">
          <Helmet
            title="Statistici - Monitorizare Vot"
            meta={[
              { name: 'description', content: 'Statistici' },
            ]}
          />
          <StatsInfo />
          <section className="container">
            <div className="row">
              { this.props.stats ?
                <ListStats {...this.props} />
                : null
              }
              <div style={styles.buttonWrapper}>
                <RaisedButton
                  label="Vezi toate sesizarile"
                  labelPosition="before"
                  primary
                  icon={<ChevronRight />}
                  className="button"
                  onClick={this.browseToSesizari}
                />
              </div>
            </div>
          </section>
        </div>
      );
    }
    return <Loading />;
  }
}

Statistici.propTypes = {
  getStats: React.PropTypes.func,
  stats: React.PropTypes.object,
};

export function mapDispatchToProps(dispatch) {
  return {
    getStats: () => dispatch(getStatsAction()),
  };
}

const mapStateToProps = createStructuredSelector({
  stats: getStatsData(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Statistici);
