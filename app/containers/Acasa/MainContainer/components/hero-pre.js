import React from 'react';
import styled from 'styled-components';
import CountDown from 'react-simple-countdown';
import Icons from 'components/Icons';

const Timer = styled.div`
  .timer {
    color: #5F288D;
    margin-bottom: 40px;
  }

  .timer-col {
    display: inline-block;
    margin: 0 5px;

    @media (min-width: 36em) {
      margin: 0 10px;
    }

    @media (min-width: 48em) {
      margin: 0 20px;
    }
  }

  p {
    display: inline-block;
    margin: 0;
    text-align: center;

    strong {
      font-weight: 300;
      font-size: 36px;

      @media (min-width: 48em) {
        font-size: 72px;
      }
    }

    span {
      font-size: 14px;
      display: block;
      margin-top: -5px;

      @media (min-width: 48em) {
        font-size: 22px;
        margin-top: -15px;
      }
    }
  }
`;

const IconsList = styled.ul`
  margin: 40px 0;
  padding: 0;
`;

const IconWrap = styled.li`
  display: inline-block;
  list-style: inside none;
  margin: 10px;

  .svg-icon {
    color: #5F288D;
    padding: 5px;
  }
`;

function HeroPre() {
  const messages = {
    days: {
      plural: ' zile',
      singular: ' zi',
    },
    hours: ' ore',
    mins: ' minute',
    segs: ' secunde',
  };

  return (
    <section className="container">
      <div className="row">
        <div className="col-xs-12 col-md-offset-2 col-md-8">
          <div className="page-hero">
            <h1>Sesizează orice neregulă ai remarcat în campania electorală sau în ziua votului.</h1>
            <Timer>
              <CountDown
                date="2016-12-11T07:00:00.000Z"
                className="timer"
                {...messages}
              />
            </Timer>

            <p>
              Pe 26 mai 2019 au loc alegerile europarlamentare și referendumul național pe justiție. Dacă ai sesizat
              nereguli în timpul campaniei sau în ziua votului postează aici. Ai văzut mesaje care instigă la ură, ai
              văzut campanii derulate în mod ilegal sau alte comunicări care contravin principiilor democratice,
              probleme în secția în care ai votat etc? Trimite o sesizare folosind formularul de mai jos.
            </p>

            <IconsList>
              <IconWrap><Icons icon="info" /></IconWrap>
              <IconWrap><Icons icon="location" /></IconWrap>
              <IconWrap><Icons icon="clock" /></IconWrap>
              <IconWrap><Icons icon="system" /></IconWrap>
              <IconWrap><Icons icon="vote" /></IconWrap>
              <IconWrap><Icons icon="box" /></IconWrap>
              <IconWrap><Icons icon="building" /></IconWrap>
              <IconWrap><Icons icon="police" /></IconWrap>
            </IconsList>

            <p>Ajută România să aibă alegeri corecte!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroPre;
