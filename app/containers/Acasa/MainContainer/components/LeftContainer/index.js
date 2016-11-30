/**
 * Created by dcorde on 08.11.2016.
 */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import FlatButton from 'material-ui/FlatButton';

import Map from 'components/selectCountry';

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

const AddIncidentForm = styled.div`
  // TODO: global with style variables (colors, breakpoints etc.)
  padding: 20px;

  h2 {
    margin-top: 0;
    color: #5f288d;
  }

  p {
    color: #5f288d;
  }

  @media (min-width: 75em) {
    position: fixed;
    width: 550px;
  }
`;

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
      active: true,
    };
  }

  setActiveOption = () => {
    this.setState({ active: !this.state.active });
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
      <div className="col-xs-12 col-lg-6 form-col">
        <AddIncidentForm className="form-incident">
          <h2>Adauga o sesisare</h2>
          <p>Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat</p>

          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <TextField hintText="Andrei" floatingLabelText="Nume" fullWidth onChange={this.handleOnChangeInput} />
            </div>

            <div className="col-xs-12 col-sm-6">
              <TextField hintText="Popescu" floatingLabelText="Prenume" fullWidth onChange={this.handleOnChangeInput} />
            </div>

            <div className="col-xs-12">
              <Map half active={this.state.active} setActiveOption={this.setActiveOption} />
            </div>

            <div className="col-xs-12 col-sm-6">
              <AutoComplete hintText="Alege judetul" floatingLabelText="Judetul" fullWidth openOnFocus dataSource={this.state.dataSource} onUpdateInput={this.handleUpdateInput} />
            </div>

            <div className="col-xs-12 col-sm-6">
              <AutoComplete hintText="Alege orasul" floatingLabelText="Orasul" fullWidth openOnFocus dataSource={this.state.dataSource} onUpdateInput={this.handleUpdateInput} />
            </div>

            <div className="col-xs-12 col-sm-6">
              <AutoComplete hintText="Alege sectia" floatingLabelText="Sectia" fullWidth openOnFocus dataSource={this.state.dataSource} onUpdateInput={this.handleUpdateInput} />
            </div>

            <div className="col-xs-12 col-sm-6">
              <Toggle label="Nu sunt in sectie" labelPosition="right" />
            </div>

            <div className="col-xs-12 col-sm-6">
              <TextField hintText="Da-ne mai multe detalii despre ce s-a intamplat" floatingLabelText="Sesizarea ta" fullWidth multiLine rows={2} />
            </div>

            <div className="col-xs-12 col-sm-6">
              <div>
                <SelectField hintText="Tipul sesizarii" fullWidth />
              </div>

              <div>
                <FlatButton label="Adauga sesizare" primary />
              </div>
            </div>


          </div>
        </AddIncidentForm>
      </div>
    );
  }
}

export default connect()(LeftContainer);
