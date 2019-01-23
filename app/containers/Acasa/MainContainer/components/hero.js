import React from 'react';
import CallToAction from 'components/CallToAction';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';

function Hero() {
  return (
    <section className="container">
      <div className="row">
        <div className="col-xs-12 col-md-offset-2 col-md-8 page-hero">
          <h1>
            Sesizează orice incident
          </h1>
          <p>
            Dacă ai sesizat nereguli în timpul campaniei pentru referendum sau în ziua votului postează aici. Ai văzut mesaje care instigă la ură, ai văzut campanii derulate în mod ilegal sau alte comunicări care contravin principiilor democratice și care atacă drepturile fundamentale ale omului? Trimite o sesizare folosind formularul de mai jos. Mesajul tău va fi astfel public și va putea fi văzut de toți utilizatorii și preluat de autorități sau jurnaliști și investigată mai departe.
          </p>
          <CallToAction
            label="Vezi toate sesizările"
            icon={<ArrowForward />}
            primary
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
