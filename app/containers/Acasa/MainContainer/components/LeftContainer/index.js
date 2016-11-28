/**
 * Created by dcorde on 08.11.2016.
 */
import React from 'react';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import Wrapper from './Wrapper';
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
      <Wrapper className="col-xs-12 col-lg-6">
        <h2 style={{ color: '#5F288D' }}>Adauga o sesisare</h2>
        <div style={{ padding: '10px' }}>
          <TextField hintText="Numele si prenume" floatingLabelText="Nume si prenume" fullWidth onChange={this.handleOnChangeInput} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineStyle} />
          <AutoComplete hintText="Judetul" floatingLabelText="Judetul" fullWidth openOnFocus dataSource={this.state.dataSource} onUpdateInput={this.handleUpdateInput} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineStyle} />
          <AutoComplete hintText="Orasul" floatingLabelText="Orasul" fullWidth openOnFocus dataSource={this.state.dataSource} onUpdateInput={this.handleUpdateInput} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineStyle} />
          <AutoComplete hintText="Sectia" floatingLabelText="Sectia" fullWidth openOnFocus dataSource={this.state.dataSource} onUpdateInput={this.handleUpdateInput} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineStyle} />
          <Toggle label="Nu sunt in sectie" labelPosition="right" />
          <SelectField hintText="Tipul de problema" fullWidth />
          <TextField hintText="Da-ne mai multe detalii despre ce s-a intamplat" floatingLabelText="Da-ne mai multe detalii despre ce s-a intamplat" fullWidth multiLine rows={2} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineStyle} />
          <Button text="Adauga sesizare" style={styles.butonSesizare} />
        </div>
      </Wrapper>
    );
  }
}

export default connect()(LeftContainer);
