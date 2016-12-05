import React from 'react';
import styled from 'styled-components';
import CountDown from 'react-simple-countdown';

const Timer = styled.div`
  .timer {
    color: #5F288D;
    margin-bottom: 40px;
  }

  .timer-col {
    display: inline-block;
    margin: 0 10px;

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
            <h1>Pe 11 decembrie<br /> sesizează orice incident.</h1>
            <Timer>
              <CountDown
                date="2016-12-11T07:00:00.000Z"
                className="timer"
                {...messages}
              />
            </Timer>
            <p>
              Ai ajuns la secția de votare și ai sesizat o neregulă? Ai observat că un partid politic încă își face campanie în ziua votului pentru alegerile parlamentare? Ai observat autocare cu pasageri ce nu par a fi turiști? Cozile par interminabile la secția la care ai fost arondat?<br /><br />Pe 11 decembrie ajută România să aibă alegeri corecte!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroPre;
