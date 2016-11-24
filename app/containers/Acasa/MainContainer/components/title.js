import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import { browserHistory } from 'react-router';

const buttonStyle = {
  backgroundColor: '#5F288D',
  color: 'white',
  padding: '0 25px',
  height: '50px',
};

export class Title extends React.PureComponent {
  browseToSesizari() {
    browserHistory.push('/sesizari');
  }
  render() {
    return (
      <div className="sesizariTitle col-md-8 col-md-offset-2" style={{ textAlign: 'center', marginBottom: '100px' }}>
        <h1>
          Sesizeaza orice incident
        </h1>
        <h4>
          Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective.
        </h4>
        <RaisedButton
          label="Vezi toate sesizarile"
          labelPosition="before"
          backgroundColor="#5F288D"
          primary
          icon={<ChevronRight />}
          buttonStyle={buttonStyle}
          onClick={this.browseToSesizari}
        />
      </div>
    );
  }
}

export default Title;
