/**
 * Created by dcorde on 08.11.2016.
 */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Map from 'components/selectCountry';
import { StickyContainer, Sticky } from 'react-sticky';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import FileUploader from 'components/FileUploader';
import MenuItem from 'material-ui/MenuItem';

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

const overflowElipsisStyle = {
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
};
const counterStyle = {
  marginTop: '5px',
  float: 'right',
};

const AddIncidentForm = styled.div`
  { // TODO: add variables to styled (colors, breakpoints etc.) }
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

  .sticky {
    padding-bottom: 30px;
  }
`;

export class LeftContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      nume: '',
      prenume: '',
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
        value: 'Alege tipul sesizarii',
      },
      description: {
        value: '',
        characterCount: 0,
      },
      prezenta: false,
      dataSource: mocks.judete,
      active: true,
    };
  }

  setActiveOption = () => {
    this.setState({ active: !this.state.active });
  }

  getNumberOfCharacters = (event) => {
    this.setState({
      description: {
        value: event.target.value,
        characterCount: event.target.value.length,
      },
    });
  }

  handleOnChangeInput = (value) => {
    this.setState({
      nume: value,
    });
  }

  handleUpdateInput = (value) => {
    this.setState({
      judet: {
        text: value.text,
        value: value.value,
      },
    });
  }

  handleToggle = () => {
    this.setState({
      prezenta: !this.state.prezenta,
    });
  }

  handleChange = (event, index, value) => {
    let updatedValue;

    switch (value) {
      case 'Altele':
        updatedValue = 'Altele';
        break;
      case 'Campanie electorala in ziua votului':
        updatedValue = 'Campanie electorala in ziua votului';
        break;
      case 'Media & Internet':
        updatedValue = 'Media & Internet';
        break;
      case 'Mita electorala':
        updatedValue = 'Mita electorala';
        break;
      default:
    }
    this.setState({
      tipulDeProblema: {
        value: updatedValue,
      },
    });
  }

  shouldBeSticky() {
    return document.documentElement.clientWidth > 1024;
  }

  render() {
    return (
      <StickyContainer className="col-xs-12 col-lg-6 form-col">
        <AddIncidentForm className="interact">
          <Sticky isActive={this.shouldBeSticky()}>
            <h2>Adauga o sesisare</h2>
            <p>Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat</p>

            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <TextField
                  hintText="Popescu"
                  floatingLabelText="Nume"
                  floatingLabelFixed
                  fullWidth
                  name={'Nume'}
                  value={this.state.nume}
                  onChange={this.handleOnChangeInput}
                />
              </div>

              <div className="col-xs-12 col-sm-6">
                <TextField
                  hintText="Andrei"
                  floatingLabelText="Prenume"
                  floatingLabelFixed
                  fullWidth
                  name={'Prenume'}
                  value={this.state.prenume}
                  onChange={this.handleOnChangeInput}
                />
              </div>

              <div className="col-xs-12">
                <Map
                  half
                  active={this.state.active}
                  setActiveOption={this.setActiveOption}
                />
              </div>

              <div className="col-xs-12 col-sm-6">
                <AutoComplete
                  hintText="Cauta judetul"
                  floatingLabelText="Judetul"
                  floatingLabelFixed
                  fullWidth
                  openOnFocus
                  name={'Judetul'}
                  value={this.state.judet.text}
                  dataSource={this.state.dataSource}
                  onUpdateInput={this.handleUpdateInput}
                />
              </div>

              <div className="col-xs-12 col-sm-6">
                <AutoComplete
                  hintText="Cauta orasul"
                  floatingLabelText="Orasul"
                  fullWidth
                  floatingLabelFixed
                  openOnFocus
                  name={'Orasul'}
                  value={this.state.oras.text}
                  dataSource={this.state.dataSource}
                  onUpdateInput={this.handleUpdateInput}
                />
              </div>

              <div className="col-xs-12 col-sm-6">
                <AutoComplete
                  hintText="Cauta sectia"
                  floatingLabelText="Sectia"
                  fullWidth
                  floatingLabelFixed
                  openOnFocus
                  name={'Sectia'}
                  value={this.state.sectie.text}
                  dataSource={this.state.dataSource}
                  onUpdateInput={this.handleUpdateInput}
                />
              </div>

              <div className="col-xs-12 col-sm-6">
                <div className="presence">
                  <Toggle
                    label={(this.state.prezenta) ? 'Sunt in sectie' : 'Nu sunt in sectie'}
                    labelPosition="right"
                    onToggle={this.handleToggle}
                  />
                </div>
              </div>

              <div className="col-xs-12 col-sm-6">
                <TextField
                  hintText="Da-ne mai multe detalii despre ce s-a intamplat in maxim 300 de caractere"
                  floatingLabelText="Sesizarea ta"
                  floatingLabelFixed
                  fullWidth
                  multiLine
                  rows={2}
                  maxLength={300}
                  name={'Text sesizare'}
                  value={this.state.description.value}
                  onChange={this.getNumberOfCharacters}
                />
                <span style={counterStyle}>{this.state.description.characterCount}/300</span>
              </div>

              <div className="col-xs-12 col-sm-6 types">
                <SelectField
                  floatingLabelText="Tipul sesizarii"
                  fullWidth
                  floatingLabelFixed
                  hintText={this.state.tipulDeProblema.value}
                  onChange={this.handleChange}
                  style={overflowElipsisStyle}
                >
                  <MenuItem
                    name={'Tipul sesizarii'}
                    value={'Altele'}
                    primaryText="Altele"
                  />
                  <MenuItem
                    name={'Tipul sesizarii'}
                    value={'Campanie electorala in ziua votului'}
                    primaryText="Campanie electorala in ziua votului"
                  />
                  <MenuItem
                    name={'Tipul sesizarii'}
                    value={'Media & Internet'}
                    primaryText="Media & Internet"
                  />
                  <MenuItem
                    name={'Tipul sesizarii'}
                    value={'Mita electorala'}
                    primaryText="Mita electorala"
                  />
                </SelectField>
                <FileUploader />
                <RaisedButton
                  buttonStyle={buttonStyle}
                  overlayStyle={buttonOverlayStyle}
                  labelStyle={buttonLabelStyle}
                  label="Adauga sesizarea"
                  labelPosition="after"
                  icon={<AddCircleOutline style={buttonIconStyle} />}
                  fullWidth
                  className="button"
                  onClick={this.handleSubmit}
                />
              </div>
            </div>

          </Sticky>
        </AddIncidentForm>
      </StickyContainer>);
  }
}

export default connect()(LeftContainer);
