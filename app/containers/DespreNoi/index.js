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
  }
`;

export default class DespreNoi extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-offset-2 col-sm-8 col-lg-offset-3 col-lg-6">
            <Helmet
              title="Despre noi - Monitorizare Vot"
              meta={[
                { name: 'description', content: 'Despre noi' },
              ]}
            />
            <div className="page-hero">
              <h1>Află mai multe despre noi</h1>
            </div>
            <Content>
              <Stamp>
                <Icons icon="mvCircle" />
              </Stamp>
              <p>Monitorizare Vot este un proiect Code for Romania , realizat în parteneriat cu <a href="http://expertforum.ro/" target="_blank">EFOR</a>, <a href="https://www.facebook.com/groups/1591449631185716/" target="_blank">Geeks for Democracy</a>, <a href="http://www.funkycitizens.org/" target="_blank">Funky Citizens</a> și <a href="https://www.facebook.com/Observatorul-Electoral-307266686310878/" target="_blank">Observatorul Electoral</a>. Scopul nostru este dezvoltarea unui instrument IT  prin care observatorii electorali i   să poată transmite simplu și rapid sesizările lor către ONG-ul care i-a acreditat. În plus,oferim cetățenilor o platformă foarte ușor de folosit unde se pot face auziți atunci când au de semnalat o neregulă în desfășurarea  alegerilor. Ne dorim astfel să-i încurajăm pe oameni să se implice în procesul electoral, pentru alegeri corecte în toată țara.</p>
              <Stamp>
                <a href="http://www.code4.ro/" target="_blank"><Icons icon="code4" /></a>
              </Stamp>
              <p>Code for Romania este o organizație neguvernamentală, neafiliată politic și apolitică, înființată în 2016. Code for Romania își propune să formeze o comunitate de profesioniști în IT care să creeze soluții digitale ce rezolvă probleme ale societății. Misiunea noastră este să dăm oamenilor informaţiile, mijloacele şi curajul să se implice mai mult în rezolvarea problemelor societăţii. Proiectele Code for Romania sunt dezvoltate pe bază de voluntariat și în format open-source.</p>
            </Content>
          </div>
        </div>
      </section>
    );
  }
}
