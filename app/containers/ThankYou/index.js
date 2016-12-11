import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import styled from 'styled-components';
import CallToAction from 'components/CallToAction';
import Check from 'material-ui/svg-icons/navigation/check';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';

const Content = styled.div`
  margin: 0 0 120px;
`;

const Wrapper = styled.div`
  background: rgba(253, 218, 68, 0.9);
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 60px;

  .continue {
    .cta-wrap {
      display: inline-block;
      margin: 20px 10px 0;
    }
  }

  .thanks {
    padding: 20px 40px;
    text-align: center;
  }
`;

const Legal = styled.p`
  margin: 20px 0;
  font-size: 18px;
`;

export default class DespreNoi extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-offset-2 col-sm-8">
            <Helmet
              title="Mulțumim - Monitorizare Vot"
              meta={[
                { name: 'description', content: 'Mulțumim' },
              ]}
            />
            <Content>
              <Wrapper>
                <div className="thanks">
                  <Check style={{ width: '80px', height: '80px' }} />
                  <h1>Mulțumim!</h1>
                  <h2>Sesizarea ta a fost înregistrată.</h2>
                  <Legal>Sesizările trimise vor fi promovate în scop informativ în social media și către mass-media. Dacă dorești un răspuns direct de la autorități, te rugăm să te adresezi Biroului Electoral de Circumscripție sau Biroului Electoral Central. <br />Mai multe <Link to="despre-noi">detalii aici</Link>.</Legal>

                  <div className="continue">
                    <CallToAction
                      label="Vezi toate sesizările"
                      icon={<ArrowForward />}
                    />
                  </div>
                </div>
              </Wrapper>
            </Content>
          </div>
        </div>
      </section>
    );
  }
}
