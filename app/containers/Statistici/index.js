import React from 'react';
import Helmet from 'react-helmet';
import ListStats from './components/ListStats';

const statsMock = [
  {
    title: '12.232',
    subtitle: 'something something',
  },
  {
    title: 'Dolj',
    subtitle: 'something something',
  },
  {
    title: 'Tragoviste',
    subtitle: 'something something',
  },
  {
    title: '9.423',
    subtitle: 'something something',
  },
  {
    title: 'Constanta',
    subtitle: 'something something',
  },
  {
    title: 'Bucuresti',
    subtitle: 'something something',
  },
];

export default class Statistici extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Statistici"
          meta={[
            { name: 'description', content: 'Statistici' },
          ]}
        />

        <ListStats stats={statsMock} />
      </div>
    );
  }
}
