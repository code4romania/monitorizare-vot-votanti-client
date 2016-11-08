import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Helmet from 'react-helmet';

export default class ReguliVot extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Reguli vot"
          meta={[
            { name: 'description', content: 'Reguli vot' },
          ]}
        />
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
      </div>
    );
  }
}
