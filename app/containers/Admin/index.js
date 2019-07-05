import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import {Messages} from './Messages';
import withAdminWrapper from '../../wrappers/withAdminWrapper';

const Content = styled.div`
  margin: 0 0 120px;

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
        <div className="row">
            <Helmet
              title="Admin - Monitorizare Vot"
              meta={[
                { name: 'admin', content: 'Admin' },
              ]}
            />
            <Content>
              <Messages />
            </Content>
        </div>
      </section>
    );
  }
}

export default withAdminWrapper(Admin);
