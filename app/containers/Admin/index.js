import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const Content = styled.div`
  margin: 0 0 120px;

  p {
    font-size: 16px;
    text-align: center;
    margin: 30px 0 60px;
  }
`;

export default class Admin extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-offset-2 col-sm-8 col-lg-offset-3 col-lg-6">
            <Helmet
              title="Admin - Monitorizare Vot"
              meta={[
                { name: 'admin', content: 'Admin' },
              ]}
            />
            <div className="page-hero">
              <h1>Admin</h1>
            </div>
            <Content>
            </Content>
          </div>
        </div>
      </section>
    );
  }
}
