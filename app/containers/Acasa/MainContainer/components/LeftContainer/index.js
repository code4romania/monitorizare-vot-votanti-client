import React from 'react';
import { connect } from 'react-redux';
import { StickyContainer, Sticky } from 'react-sticky';
import { Link } from 'react-router';
import { createStructuredSelector } from 'reselect';
import * as _ from 'lodash';
import styled from 'styled-components';
import Recaptcha from 'react-recaptcha';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import MenuItem from 'material-ui/MenuItem';
import Map from 'components/selectCountry';
import FileUploader from 'components/FileUploader';
import { setNumeAction, setPrenumeAction, setIncidentIdAction, setPrecintIdAction, setValidationKeyAction, setActiveMapAction, submitFormAction, setDescriptionAction, resetCountyAction, setCountyAction, getCitiesAction, getPrecintsAction, setCityAction, setPresenceAction, uploadImageAction } from '../../../actions';
import { getName, getPrenume, map, getCities, getPrecints, getDescription } from '../../../selectors';
import ThankYou from './thank-you';

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
  fontWeight: '700',
  letterSpacing: '1px',
};

const buttonIconStyle = {
  fill: '#ffffff',
};

const overflowElipsisStyle = {
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
};

const Interact = styled.div`
  padding: 0 15px;
`;

const AddIncident = styled.div`
  padding-bottom: 60px;

  .map {
    margin-top: 10px;
  }
`;

const Counter = styled.span`
  margin-top: 5px;
  float: right;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1px;
`;

export class LeftContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.state = {
      nume: '',
      prenume: '',
      description: {
        value: '',
        characterCount: 0,
      },
      tipulDeProblema: {
        value: 'Alege tipul sesizării',
      },
      prezenta: false,
      active: true,
      imag: '',
      token: false,
    };
  }

  setActiveOption = (event) => {
    this.setState({ active: !this.state.active });
    this.props.setActiveMap(event.currentTarget.dataset.name);
  }

  getNumberOfCharacters = (event) => {
    this.setState({
      description: {
        value: event.target.value,
        characterCount: event.target.value.length,
      },
    });
    this.props.setDescription(event.target.value);
  }

  setIncidentType = (event, index, value) => {
    this.setState({ value });
    this.props.setIncidentId(value);
  }

  setPrecintId = (searchText, array) => {
    const precint = _.find(array, (o) => o.text === searchText);
    if (precint) {
      this.props.setPrecintId(precint.id);
    }
  }
  handleOnChangeInputNume = (event, value) => {
    this.props.setNume(value);
  }

  handleOnChangeInputPrenume = (event, value) => {
    this.props.setPrenume(value);
  }

  handleUpdateInput = (value) => {
    this.setState({
      judet: {
        text: value.text,
        value: value.value,
      },
    });
  }

  handleToggle = (proxy, isActive) => {
    this.setState({
      prezenta: !this.state.prezenta,
    });
    this.props.setPresence(isActive);
  }

  shouldBeSticky() {
    return document.documentElement.clientWidth > 1024;
  }

  selectCounty = (searchText, countiesArray) => {
    const getCounty = _.find(countiesArray, (o) => o.text === searchText);
    if (_.isUndefined(getCounty)) {
      this.props.resetCounty();
    } else {
      this.props.setCounty(getCounty.id);
      this.props.getCities();
    }
  }

  selectCity = (searchText, citiesArray) => {
    const getCity = _.find(citiesArray, (o) => o.text === searchText);
    if (_.isUndefined(getCity)) {
      this.props.resetCounty();
    } else {
      this.props.setCity(getCity.id);
      this.props.getPrecints();
    }
  }

  upload = (file) => {
    this.props.uploadImage(file.currentTarget.files[0]);
  }

  handleSubmit = () => {
    this.props.submitForm();
  }

  callback = () => {
    console.log('Done!!!!');
  };

  verifyCallback = (response) => {
    this.props.setValidationKey(response);
  };

  render() {
    return (
      <StickyContainer className="col-xs-12 col-lg-7 form-col">
        <Interact className="interact">
          <Sticky isActive={this.shouldBeSticky()}>
            <h2>Adaugă o sesizare</h2>
            <p>Mai jos găsești formularul prin care poți să trimiți o sesizare. Dacă nu ești sigur ce poate fi subiectul unei sesizări, verifică aici <Link to="reguli-vot">Regulile votului</Link>.</p>

            <AddIncident className="row interact-form add-incident">
              <div className="col-xs-12">
                <TextField
                  hintText="Da-ne mai multe detalii despre ce s-a întamplat, în maxim 300 de caractere"
                  floatingLabelText="Sesizarea ta"
                  floatingLabelFixed
                  fullWidth
                  multiLine
                  rows={3}
                  maxLength={300}
                  name={'Text sesizare'}
                  defaultValue={this.props.description}
                  onChange={this.getNumberOfCharacters}
                />
                <Counter>{this.state.description.characterCount}/300</Counter>
              </div>

              <div className="col-xs-12 col-sm-6">
                <TextField
                  hintText="Popescu"
                  floatingLabelText="Nume"
                  floatingLabelFixed
                  fullWidth
                  name={'Nume'}
                  value={this.props.name}
                  onChange={this.handleOnChangeInputNume}
                />
              </div>

              <div className="col-xs-12 col-sm-6">
                <TextField
                  hintText="Andrei"
                  floatingLabelText="Prenume"
                  floatingLabelFixed
                  fullWidth
                  name={'Prenume'}
                  value={this.props.prenume}
                  onChange={this.handleOnChangeInputPrenume}
                />
              </div>

              <div className="col-xs-12 col-sm-6">
                <Map
                  half
                  active={this.state.active}
                  setActiveOption={this.setActiveOption}
                />
              </div>

              <div className="col-xs-12 col-sm-6">
                <FileUploader upload={this.upload} />
                <div>{this.state.image}</div>
              </div>

              { this.props.map === 'country' ?
                <div className="col-xs-12">
                  <div className="row">
                    <div className="col-xs-12 col-sm-6">
                      <AutoComplete
                        hintText="Completează județul"
                        floatingLabelText="Județul"
                        floatingLabelFixed
                        fullWidth
                        openOnFocus
                        name={'Județul'}
                        filter={AutoComplete.fuzzyFilter}
                        maxSearchResults={5}
                        value=""
                        dataSource={this.props.counties.length > 0 ? this.props.counties : []}
                        onUpdateInput={this.selectCounty}
                      />
                    </div>

                    <div className="col-xs-12 col-sm-6">
                      <AutoComplete
                        hintText="Completează orașul"
                        floatingLabelText="Orașul"
                        fullWidth
                        floatingLabelFixed
                        openOnFocus
                        name={'Orașul'}
                        filter={AutoComplete.fuzzyFilter}
                        maxSearchResults={35}
                        value=""
                        dataSource={this.props.cities.length > 0 ? this.props.cities : []}
                        onUpdateInput={this.selectCity}
                      />
                    </div>
                  </div>
                </div>
                  :
                    <div></div>
              }

              <div className="col-xs-12 col-sm-6">
                <AutoComplete
                  hintText="Caută secția"
                  floatingLabelText="Secția"
                  fullWidth
                  floatingLabelFixed
                  openOnFocus
                  name={'Secția'}
                  filter={AutoComplete.fuzzyFilter}
                  maxSearchResults={35}
                  value=""
                  dataSource={this.props.precints.length > 0 ? this.props.precints : []}
                  onUpdateInput={this.setPrecintId}
                />
              </div>

              <div className="col-xs-12 col-sm-6">
                <div style={{ marginTop: '37px' }} className="presence">
                  <Toggle
                    label={(this.state.prezenta) ? 'Sunt în secție' : 'Nu sunt în secție'}
                    labelPosition="right"
                    onToggle={this.handleToggle}
                  />
                </div>
              </div>

              <div className="col-xs-12 col-sm-6">
                <div className="types">
                  <SelectField ref={(cb) => { this.typeRef = cb; }} floatingLabelText="Tipul sesizării" floatingLabelFixed value={this.state.value} onChange={this.setIncidentType} hintText="Alege tipul sesizării" fullWidth className="dropdown" labelStyle={overflowElipsisStyle}>
                    <MenuItem value="0" primaryText="Toate" />
                    {this.props.incidentTypes.map((incident) =>
                      <MenuItem key={incident.id} value={incident.id} primaryText={incident.name} />
                    )}
                  </SelectField>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6">
                <Recaptcha
                  sitekey="6LdLYg4UAAAAAHv3w_o1ym8HHaLn-bwZRXk5IdNl"
                  render="explicit"
                  size="normal"
                  verifyCallback={this.verifyCallback}
                  onloadCallback={this.callback}
                />
              </div>

              <div className="col-xs-12 col-sm-offset-6 col-sm-6">
                <RaisedButton
                  buttonStyle={buttonStyle}
                  overlayStyle={buttonOverlayStyle}
                  labelStyle={buttonLabelStyle}
                  label="Adaugă sesizarea"
                  labelPosition="after"
                  icon={<AddCircleOutline style={buttonIconStyle} />}
                  fullWidth
                  className="button"
                  onClick={this.handleSubmit}
                />
              </div>

              <ThankYou name="George" />

            </AddIncident>

          </Sticky>
        </Interact>
      </StickyContainer>);
  }
}

LeftContainer.propTypes = {
  setNume: React.PropTypes.func,
  setPrenume: React.PropTypes.func,
  setActiveMap: React.PropTypes.func,
  setCounty: React.PropTypes.func,
  resetCounty: React.PropTypes.func,
  getCities: React.PropTypes.func,
  getPrecints: React.PropTypes.func,
  setCity: React.PropTypes.func,
  setPresence: React.PropTypes.func,
  setDescription: React.PropTypes.func,
  counties: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
  cities: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
  incidentTypes: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
  precints: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
  name: React.PropTypes.string,
  prenume: React.PropTypes.string,
  map: React.PropTypes.string,
  description: React.PropTypes.string,
  uploadImage: React.PropTypes.func,
  submitForm: React.PropTypes.func,
  setIncidentId: React.PropTypes.func,
  setValidationKey: React.PropTypes.func,
  setPrecintId: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    setNume: (name) => dispatch(setNumeAction(name)),
    setPrenume: (prenume) => dispatch(setPrenumeAction(prenume)),
    setActiveMap: (activeMap) => dispatch(setActiveMapAction(activeMap)),
    setCounty: (id) => dispatch(setCountyAction(id)),
    resetCounty: () => dispatch(resetCountyAction()),
    getCities: () => dispatch(getCitiesAction()),
    getPrecints: () => dispatch(getPrecintsAction()),
    setCity: (id) => dispatch(setCityAction(id)),
    setPresence: (active) => dispatch(setPresenceAction(active)),
    setDescription: (description) => dispatch(setDescriptionAction(description)),
    uploadImage: (image) => dispatch(uploadImageAction(image)),
    submitForm: () => dispatch(submitFormAction()),
    setIncidentId: (id) => dispatch(setIncidentIdAction(id)),
    setValidationKey: (key) => dispatch(setValidationKeyAction(key)),
    setPrecintId: (id) => dispatch(setPrecintIdAction(id)),
  };
}

const mapStateToProps = createStructuredSelector({
  name: getName(),
  prenume: getPrenume(),
  map: map(),
  cities: getCities(),
  precints: getPrecints(),
  description: getDescription(),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftContainer);
