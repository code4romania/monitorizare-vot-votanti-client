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

const Legal = styled.blockquote`
  margin: 0;
  border-left: 5px solid rgba(95, 40, 141, 0.6);
  padding: 0 0 0 20px;

  p {
    font-size: 14px;
    margin: 20px 0;
    text-align: left;
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
              <h1>Află mai multe<br /> despre noi</h1>
            </div>
            <Content>
              <Stamp>
                <Icons icon="mvCircle" />
              </Stamp>
              <p>
                Monitorizare Vot este un proiect Code for Romania. Scopul nostru este dezvoltarea unui instrument IT prin care observatorii electorali i să poată transmite simplu și rapid sesizările lor către ONG-ul care i-a acreditat. În plus ,oferim cetățenilor o platformă foarte ușor de folosit unde se pot face auziți atunci când au de semnalat o neregulă în desfășurarea alegerilor. Ne dorim astfel să-i încurajăm pe oameni să se implice în procesul electoral, pentru alegeri corecte în toată țara. Partenerii proiectului: <a href="http://expertforum.ro/" target="_blank">EFOR</a>, <a href="https://www.facebook.com/groups/1591449631185716/" target="_blank">Geeks for Democracy</a>, <a href="http://www.funkycitizens.org/" target="_blank">Funky Citizens</a>, <a href="https://www.facebook.com/Observatorul-Electoral-307266686310878/" target="_blank">Observatorul Electoral</a>, <a href="http://resursecivice.ro/" target="_blank">Centrul pentru Resurse Civice</a> și <a href="http://www.democracycenter.ro/romana" target="_blank">Centrul pentru Studiul Democratiei</a>
              </p>
              <p>
                Monitorizare Vot a câștigat premiul I pentru Participare Civică în 2017 la Gala Societății Civile. Aplicația de observare a alegerilor va fi utilizată în Polonia, în cadrul alegerilor din octombrie 2018. Informații despre versiunea internațională a aplicației sunt disponibile <a href="http://www.votemonitor.org/" target="_blank">aici</a>.
              </p>
              <Stamp>
                <a href="http://www.code4.ro/" target="_blank"><Icons icon="code4" /></a>
              </Stamp>
              <p>Code for Romania este o organizație neguvernamentală, neafiliată politic și apolitică, înființată în 2016. Code for Romania își propune să formeze o comunitate de profesioniști în IT care să creeze soluții digitale ce rezolvă probleme ale societății. Misiunea noastră este să dăm oamenilor informaţiile, mijloacele şi curajul să se implice mai mult în rezolvarea problemelor societăţii. Proiectele Code for Romania sunt dezvoltate pe bază de voluntariat și în format open-source.</p>
              <Legal>
                <h3>Notă:</h3>
                <p>Toate informațiile prezentate pe acest website sunt bazate pe sesizările primite de la utilizatori. Echipa de administrare a website-ului face o minimă verificare a sesizărilor înainte de publicare, pentru a se asigura ca acestea au legatura cu subiectului alegerilor, dar nu își asumă responsabilitatea pentru conținutul și veridicitatea sesizărilor transmise de către utilizatori. Scopul platformei este acela de a informa cetățenii și de a oferi un spațiu de exprimare celor care doresc să sesizeze eventuale tentative de fraudă electorală. Platforma și statisticile aferente vor fi promovate către mass-media. Echipa Code for Romania nu își asumă responsabilitatea pentru transmiterea acestor sesizări mai departe către autoritățile competente și nici pentru oferirea de răspunsuri la sesizarile utilizatorilor. Pentru aceasta vă rugăm să va adresati Biroul Electoral de Circumscriptie sau Biroul Electoral Central.</p>
              </Legal>
            </Content>
          </div>
        </div>
      </section>
    );
  }
}
