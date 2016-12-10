import React from 'react';
import CallToAction from 'components/CallToAction';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

function Hero() {
  return (
    <section className="container">
      <div className="row">
        <div className="col-xs-12 col-md-offset-2 col-md-8 page-hero">
          <h1>
            Sesizează orice incident
          </h1>
          <p>
            Ai ajuns la secția de votare și ai sesizat o neregulă? Ai observat că un partid politic încă își face campanie în ziua votului pentru alegerile parlamentare? Ai observat autocare cu pasageri ce nu par a fi turiști? Cozile par interminabile la secția la care ai fost arondat? Trimite o sesizare folosind formularul de mai jos. Sesizarea ta va fi astfel publică și va putea fi văzută de toți utilizatorii și preluată de autorități sau jurnaliști și investigată mai departe.
          </p>
          <CallToAction
            label="Vezi toate sesizările"
            icon={<ChevronRight />}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
