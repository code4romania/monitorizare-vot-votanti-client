import React from 'react';
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
import Check from 'material-ui/svg-icons/navigation/check';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import CallToAction from 'components/CallToAction';

const Wrapper = styled.div`
  background: rgba(253, 218, 68, 0.9);
  display: flex; { /* display none; */}
  justify-content: center;
  align-items: center;
  text-align: center;

  .continue {
    .cta-wrap {
      display: inline-block;
      margin: 20px 10px 0;
    }
  }

  &.active {
    // position: absolute;
    // top: 0;
    // right: 0;
    // bottom: 0;
    // left: 0;
    // z-index: 2017;
    // display: flex;
  }
`;

const Legal = styled.p`
  margin: 0 20px;
  font-weight: 300;

  @media (min-width: 48em) {
    margin: 0 40px;
  }
`;

const buttonStyle = {
  height: '40px',
};

const buttonLabelStyle = {
  lineHeight: '40px',
  fontSize: '14px',
  fontWeight: '700',
  letterSpacing: '1px',
};

export default function ThankYou(props) {
  return (
    <Wrapper>
      <div className="thanks">
        <Check style={{ width: '80px', height: '80px' }} />
        <h1>Mulțumim {props.name}!</h1>
        <h2>Sesizarea ta a fost înregistrată.</h2>
        <Legal>Important: sesizările trimise vor fi promovate în scop informativ în social media și către mass-media. Dacă dorești un răspuns direct de la autorități, te rugăm să te adresezi Biroului Electoral de Circumscripție sau Biroului Electoral Central. Mai multe detalii aici.</Legal>

        <div className="continue">
          <div className="cta-wrap">
            <FlatButton
              label="Adaugă altă sesizare"
              labelPosition="after"
              className="button"
              primary
              style={buttonStyle}
              labelStyle={buttonLabelStyle}
              icon={<AddCircleOutline />}
            />
          </div>
          <CallToAction
            label="Vezi toate sesizările"
            icon={<ArrowForward />}
          />
        </div>
      </div>
    </Wrapper>
  );
}

ThankYou.propTypes = {
  name: React.PropTypes.string,
};
