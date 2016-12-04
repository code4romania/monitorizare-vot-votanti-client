import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import messages from './messages';

const Heading = styled.h1`
  text-align: center;
  margin: 100px 0;
`;

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col-xs-12">
            <Heading>
              <FormattedMessage {...messages.header} />
            </Heading>
          </div>
        </div>
      </section>
    );
  }
}
