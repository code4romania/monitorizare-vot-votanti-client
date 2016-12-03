/**
 * Created by dcorde on 08.11.2016.
 */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Map from 'components/selectCountry';
import AffixWrapper from 'components/AffixWrapper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import FileUploader from 'components/FileUploader';

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

const buttonStyle = {
  height: '36px',
  backgroundColor: '#5F288D',
  color: '#ffffff',
};

const AddIncidentForm = styled.div`
  { // TODO: global with style variables (colors, breakpoints etc.) }
  padding: 10px 0 40px;

  h2,
  p {
    color: #5f288d;
  }

  .presence {
    margin: 37px 0 12px;

    @media (min-width: 48em) {
      margin: 37px 0 0;
    }
  }

  .types {
    @media (min-width: 48em) {
      margin-top: 24px;
    }
  }

  .affix {
    @media (min-width: 75em) {
      position: fixed;
      top: 0;
      width: 593px;
    }
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
        <AddIncidentForm className="interact">
          <AffixWrapper offset={340}>
            <h2>Adauga o sesisare</h2>
            <p>Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat</p>

            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <TextField hintText="Popescu" floatingLabelText="Nume" floatingLabelFixed fullWidth onChange={this.handleOnChangeInput} />
              </div>

              <div className="col-xs-12 col-sm-6">
                <TextField hintText="Andrei" floatingLabelText="Prenume" floatingLabelFixed fullWidth onChange={this.handleOnChangeInput} />
              </div>

              <div className="col-xs-12">
                <Map half active={this.state.active} setActiveOption={this.setActiveOption} />
              </div>

              <div className="col-xs-12 col-sm-6">
                <AutoComplete hintText="Alege judetul" floatingLabelText="Judetul" floatingLabelFixed fullWidth openOnFocus dataSource={this.state.dataSource} onUpdateInput={this.handleUpdateInput} />
              </div>

              <div className="col-xs-12 col-sm-6">
                <AutoComplete hintText="Alege orasul" floatingLabelText="Orasul" fullWidth floatingLabelFixed openOnFocus dataSource={this.state.dataSource} onUpdateInput={this.handleUpdateInput} />
              </div>

              <div className="col-xs-12 col-sm-6">
                <AutoComplete hintText="Alege sectia" floatingLabelText="Sectia" fullWidth floatingLabelFixed openOnFocus dataSource={this.state.dataSource} onUpdateInput={this.handleUpdateInput} />
              </div>

              <div className="col-xs-12 col-sm-6">
                <div className="presence">
                  <Toggle label="Nu sunt in sectie" labelPosition="right" />
                </div>
              </div>

              <div className="col-xs-12 col-sm-6">
                { /* TODO: character count */ }
                <TextField hintText="Da-ne mai multe detalii despre ce s-a intamplat in maxim 300 de caractere" floatingLabelText="Sesizarea ta" floatingLabelFixed fullWidth multiLine rows={2} maxLength={300} />
              </div>

              <div className="col-xs-12 col-sm-6">
                <div className="types">
                  <SelectField floatingLabelText="Tipul sesizarii" fullWidth floatingLabelFixed hintText="Alege tipul sesizarii" />
                </div>

                <FileUploader />

                <RaisedButton
                  buttonStyle={buttonStyle}
                  label="Adauga sesizare"
                  labelPosition="after"
                  icon={<AddCircleOutline />}
                  fullWidth
                  primary
                  onClick={this.handleSubmit}
                />
              </div>
            </div>

          </AffixWrapper>
        </AddIncidentForm>
      </div>);
  }
}

export default connect()(LeftContainer);
