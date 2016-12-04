import React from 'react';
import CallToAction from 'components/CallToAction';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

function Hero() {
  return (
    <section className="container">
      <div className="row">
        <div className="col-xs-12 col-md-offset-2 col-md-8 page-hero">
          <h1>
            Sesizeaza orice incident
          </h1>
          <p>
            Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective.
          </p>
          <CallToAction
            label="Vezi toate sesizarile"
            icon={<ChevronRight />}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
