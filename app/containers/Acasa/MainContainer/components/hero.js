import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import { browserHistory } from 'react-router';

const buttonStyle = {
  height: '60px',
  backgroundColor: '#5F288D',
  color: '#ffffff',
};

const buttonOverlayStyle = {
  height: '60px',
};

const buttonLabelStyle = {
  lineHeight: '60px',
  fontSize: '16px',
  letterSpacing: '1px',
};

const buttonIconStyle = {
  color: '#ffffff',
};

export class Title extends React.PureComponent {
  browseToSesizari() {
    browserHistory.push('/sesizari');
  }
  render() {
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
            <div className="hero-cta">
              <RaisedButton
                label="Vezi toate sesizarile"
                labelPosition="before"
                className="button"
                primary
                buttonStyle={buttonStyle}
                overlayStyle={buttonOverlayStyle}
                labelStyle={buttonLabelStyle}
                icon={<ChevronRight style={buttonIconStyle} />}
                onClick={this.browseToSesizari}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Title;
