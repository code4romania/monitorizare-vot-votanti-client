/**
 * Created by dcorde on 08.11.2016.
 */
import React from 'react';
import { Input } from 'react-toolbox/lib/input';
// import { Autocomplete } from 'react-toolbox/lib/autocomplete';

import Button from 'components/Button';

import { connect } from 'react-redux';

const mocks = {
  judete: [
    { text: 'Alba Iulia', value: 1 },
    { text: 'Brasov', value: 2 },
    { text: 'Bucuresti', value: 3 },
    { text: 'Cluj', value: 4 },
    { text: 'Iasi', value: 5 },
    { text: 'Vaslui', value: 6 },
  ],
};

const styles = {
  floatRight: {
    float: 'right',
  },
  floatingLabelFocusStyle: {
    color: '#352245',
  },
  underlineStyle: {
    borderColor: '#352245',
  },
  butonSesizare: {
    color: '#FFFF00',
    backgroundColor: '#352245',
    textAlign: 'center',
    fontSize: '1.2rem',
    padding: '0.5rem',
  },
};

export class LeftContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        nume: '',
        judet: {
          text: '',
          value: null,
        },
        oras: {
          text: '',
          value: null,
        },
        sectie: {
          text: '',
          value: null,
        },
        tipulDeProblema: {
          value: null,
        },
      },
      dataSource: mocks.judete,
    };
  }
  handleOnChangeInput = (value) => {
    this.setState({
      form: {
        nume: value,
      },
    });
  }
  handleUpdateInput = (value) => {
    this.setState({
      form: {
        judet: {
          text: value.text,
          value: value.value,
        },
      },
    });
  }

  render() {
    return (
      <div className="col-xs-12 col-lg-6">
        <h2 style={{ color: '#5F288D' }}>Adauga o sesisare</h2>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <Input type='text' multiline label='Multiline' maxLength={20} onChange={this.handleChange.bind(this, 'multiline')} />
          </div>

          <div className="col-xs-12 col-md-6">
            {/* <Input hintText="Popescu" floatingLabelText="Prenume" fullWidth onChange={this.handleOnChangeInput} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineStyle} /> */}
          </div>

          <div className="col-xs-12 col-md-6">
            In Romania
          </div>

          <div className="col-xs-12 col-md-6">
            In Diaspora
          </div>

          <div className="col-xs-12 col-md-6">
            {/* <Autocomplete hintText="Judetul" floatingLabelText="Judetul" fullWidth openOnFocus dataSource={this.state.dataSource} onUpdateInput={this.handleUpdateInput} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineStyle} /> */}
          </div>

          <div className="col-xs-12 col-md-6">
            {/* <Autocomplete hintText="Orasul" floatingLabelText="Orasul" fullWidth openOnFocus dataSource={this.state.dataSource} onUpdateInput={this.handleUpdateInput} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineStyle} /> */}
          </div>

          <div className="col-xs-12 col-md-6">
            {/* <Autocomplete hintText="Sectia" floatingLabelText="Sectia" fullWidth openOnFocus dataSource={this.state.dataSource} onUpdateInput={this.handleUpdateInput} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineStyle} /> */}
          </div>

          <div className="col-xs-12 col-md-6">
            {/* <Toggle label="Nu sunt in sectie" labelPosition="right" /> */}
          </div>

          <div className="col-xs-12 col-md-6">
            {/* <Input hintText="Descrie sesizarea ta in maxim 300 de caracatere" openOnFocus floatingLabelText="Descriere sesizare" fullWidth multiLine rows={4} maxLength={300} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineStyle} /> */}
          </div>

          <div className="col-xs-12 col-md-6">
            <div>
              {/* <SelectField hintText="Tipul sesizarii" fullWidth /> */}
            </div>
            <div className="add-photo">
              Incarca o poza
            </div>
          </div>




          <Button text="Adauga sesizare" style={styles.butonSesizare} />
        </div>
      </div>
    );
  }
}

export default connect()(LeftContainer);
