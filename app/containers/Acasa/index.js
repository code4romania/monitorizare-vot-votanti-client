import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Helmet from 'react-helmet';
import MainContainer from './MainContainer/index';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="col-md-10 col-md-offset-1 col-xs-12">
        <Helmet
          title="Acasa"
          meta={[
            { name: 'description', content: 'Acasa' },
          ]}
        />
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <MainContainer />
      </div>
    );
  }
}
