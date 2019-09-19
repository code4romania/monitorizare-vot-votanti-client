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
            Pe 26 mai 2019 au loc alegerile europarlamentare și referendumul național pe justiție. Dacă ai sesizat
            nereguli în timpul campaniei sau în ziua votului postează aici. Ai văzut mesaje care instigă la ură, ai
            văzut campanii derulate în mod ilegal sau alte comunicări care contravin principiilor democratice, probleme
            în secția în care ai votat etc? Trimite o sesizare folosind formularul de mai jos.
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
