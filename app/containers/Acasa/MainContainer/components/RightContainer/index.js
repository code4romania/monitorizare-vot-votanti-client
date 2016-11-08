/**
 * Created by dcorde on 08.11.2016.
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ListCards from './ListCards';

function RightContainer() { // eslint-disable-line react/prefer-stateless-function
  return (
    <div className="col-xs-7">
      <FormattedMessage {...messages.infoText} />
      <ListCards />
    </div>
  );
}

export default RightContainer;
