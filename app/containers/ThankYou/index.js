import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Icons from 'components/Icons';

const Content = styled.div`
  margin: 0 0 120px;

  p {
    font-size: 16px;
    text-align: center;
    margin: 30px 0 60px;
  }
`;

const Stamp = styled.div`
  text-align: center;

  .svg-icon {
    color: #2d2d2d;
    width: 60px;
    height: 60px;
    display: block;
    margin: 0 auto;
  }

  a {
    color: #2d2d2d;
    display: inline-block;

    &:hover {
      svg {
        color: rgba(95, 40, 141, 1);
      }
    }
  }
`;

export default class DespreNoi extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-offset-2 col-sm-8 col-lg-offset-3 col-lg-6">
            <Helmet
              title="Multumimt - Monitorizare Vot"
              meta={[
                { name: 'description', content: 'Multumimt' },
              ]}
            />
            <div className="page-hero">
              <h1>Multumim pentru sesizare</h1>
            </div>
            <Content>
              <Stamp>
                <Icons icon="mvCircle" />
              </Stamp>
              <p>Daca descoperi alte nereguli, nu ezita sa le trimiti folosind formularul nostru. <br />Fiecare actiune conteaza!</p>

            </Content>
          </div>
        </div>
      </section>
    );
  }
}
