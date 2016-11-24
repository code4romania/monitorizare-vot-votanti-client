import React from 'react';
import Helmet from 'react-helmet';
import ListStats from './components/ListStats';
import StatsInfo from './components/StatsInfo';
import RaisedButton from 'material-ui/RaisedButton';
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';

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

export default class Statistici extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="col-md-12">
        <Helmet
          title="Statistici"
          meta={[
            { name: 'description', content: 'Statistici' },
          ]}
        />
        <StatsInfo />
        <ListStats stats={statsMock} />
        <div className="row center-xs" style={styles.buttonWrapper}>
          <div className="center-xs">
            <RaisedButton
              label="VEZI TOATE SESIZARILE"
              labelPosition="before"
              primary
              icon={<ArrowForwardIcon />}
            />
          </div>
        </div>
      </div>
    );
  }
}
