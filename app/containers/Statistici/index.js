import React from 'react';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { getStatsAction } from './actions';
import { createStructuredSelector } from 'reselect';
import CallToAction from 'components/CallToAction';
import Loading from 'components/Loading';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import Hero from './components/hero';
import ListStats from './components/list-stats';
import { getStatsData } from './selectors';

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
          <Hero />
          <section className="container">
            { this.props.stats ?
              <ListStats {...this.props} />
              : null
            }
            <div className="row">
              <div className="col-xs-12" style={{ marginBottom: '40px' }}>
                <CallToAction
                  label="Vezi toate sesizarile"
                  icon={<ChevronRight />}
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
