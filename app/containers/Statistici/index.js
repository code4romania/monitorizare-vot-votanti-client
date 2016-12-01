import React from 'react';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { getStatsAction } from './actions';
import ListStats from './components/ListStats';
import StatsInfo from './components/StatsInfo';
import RaisedButton from 'material-ui/RaisedButton';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const statsMock = [
  {
    title: 'Teleorman',
    subtitle: 'este judetul cu cele mai multe sesizari de la votanti',
  },
  {
    title: 'Craiova',
    subtitle: 'este judetul cu cele mai multe sesizari de la votanti',
  },
  {
    title: 'Tragoviste',
    subtitle: 'something something',
  },
  {
    title: '347',
    subtitle: 'orasul cu cele mai multe sesizari de la votanti',
  },
  {
    title: 'Constanta',
    subtitle: 'something something',
  },
  {
    title: 'Bucuresti',
    subtitle: 'something something',
  },
  {
    title: 'Teleorman',
    subtitle: 'este judetul cu cele mai multe sesizari de la votanti',
  },
  {
    title: 'Tragoviste',
    subtitle: 'este judetul cu cele mai multe sesizari de la votanti',
  },
  {
    title: 'Arad',
    subtitle: 'este judetul cu cele mai multe sesizari de la votanti',
  },
  {
    title: 'Timis',
    subtitle: 'este judetul cu cele mai multe sesizari de la votanti',
  },
];

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
            <ListStats stats={statsMock} />

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
}

Statistici.propTypes = {
  getStats: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    getStats: () => dispatch(getStatsAction()),
  };
}

export default connect(null, mapDispatchToProps)(Statistici);
