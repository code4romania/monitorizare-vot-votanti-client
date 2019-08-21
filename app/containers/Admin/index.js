import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Messages } from './Messages';
import withAdminWrapper from '../../wrappers/withAdminWrapper';

const Content = styled.div`
  margin: 0 -10em 120px -10em;

  p {
    font-size: 16px;
    text-align: center;
    margin: 0px 0 0px;
  }
`;

class Admin extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <section className="container">
        <div className="wrap">
          <Helmet
            title="Admin - Monitorizare Vot"
            meta={[
                { name: 'admin', content: 'Admin' },
            ]}
          />
          <Content className="wrap">
            <Messages />
          </Content>
        </div>
      </section>
    );
  }
}

export default withAdminWrapper(Admin);
