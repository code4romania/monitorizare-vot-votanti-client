import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Helmet from 'react-helmet';

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
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
      </div>
    );
  }
}
