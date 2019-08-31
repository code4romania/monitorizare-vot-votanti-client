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
import { setNumeAction, setPrenumeAction, setIncidentIdAction, resetFormAction, setPrecintIdAction, setValidationKeyAction, setActiveMapAction, submitFormAction, setDescriptionAction, resetCountyAction, setCountyAction, getCitiesAction, getPrecintsAction, setCityAction, setPresenceAction, uploadImageAction } from '../../../actions';
import { getName, getPrenume, map, getCities, getPrecints, getDescription, countyId, cityId, getIncidentId, getToken, getImage } from '../../../selectors';

const buttonWrapStyle = {
  marginTop: '20px',
};

const buttonStyle = {
  height: '60px',
  backgroundColor: '#5F288D',
  color: '#ffffff',
};

const buttonStyleDisabled = {
  height: '60px',
  backgroundColor: 'grey',
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
  position: 'absolute',
  width: '100%',
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

const listStyle = {
  display: 'block',
};

export class LeftContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.state = {
      nume: '',
      prenume: '',
      description: '',
      tipulDeProblema: {
        value: 'Alege tipul sesizării',
      },
      prezenta: false,
      active: true,
      imag: '',
      token: false,
    };
  }

  componentWillUnmount() {
    this.props.resetForm();
  }

  setActiveOption = (event) => {
    this.setState({ active: !this.state.active });
    this.props.setActiveMap(event.currentTarget.dataset.name);
    if (this.state.active) {
      // All diaspora precints belong to one city
      this.props.setCounty('DI');
      this.props.setCity(3191);
      this.props.getPrecints();
    }
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

  handleOnChangeDescription = (event, value) => {
    this.setState({ description: value });
    this.props.setDescription(value);
  }

  handleOnChangeInputNume = (event, value) => {
    this.setState({ nume: value });
    this.props.setNume(value);
  }

  handleOnChangeInputPrenume = (event, value) => {
    this.setState({ prenume: value });
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

  verifyCallback = (response) => {
    this.props.setValidationKey(response);
  };

  render() {
    const isValid = this.state.nume.length > 0 && this.state.prenume.length > 0 && this.props.countyId && this.props.cityId && this.state.description && this.props.incidentId && this.props.token !== undefined;
    return (
      <StickyContainer className="col-xs-12 col-lg-7 form-col">
        <Interact className="interact">
          <Sticky isActive={this.shouldBeSticky()}>
            <h2>Adaugă o sesizare</h2>
            <p>
              Sesizările trimise vor fi promovate în scop informativ în social media și către mass-media. Dacă dorești
              un răspuns direct de la autorități, te rugăm să te adresezi Biroului Electoral de Circumscripție sau
              Biroului Electoral Central. Mai multe detalii <Link to="despre-noi">aici.</Link>.
            </p>

            <AddIncident className="row interact-form add-incident">
              <div className="col-xs-12">
                <TextField
                  hintText="Dă-ne mai multe detalii despre ce s-a întâmplat"
                  floatingLabelText="Sesizarea ta"
                  floatingLabelFixed
                  fullWidth
                  required
                  multiLine
                  rows={3}
                  name={'Text sesizare'}
                  defaultValue={this.props.description}
                  onChange={this.handleOnChangeDescription}
                />
              </div>

              <div className="col-xs-12 col-sm-6">
                <TextField
                  hintText="Popescu"
                  floatingLabelText="Nume"
                  floatingLabelFixed
                  fullWidth
                  required
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
                  required
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
                <div style={{ marginTop: '37px' }} className="presence">
                  <Toggle
                    label={(this.state.prezenta) ? 'Sunt în secție' : 'Nu sunt în secție'}
                    labelPosition="right"
                    onToggle={this.handleToggle}
                  />
                </div>
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
                        required
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
                        required
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
                  required
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
                <div className="types">
                  <SelectField ref={(cb) => { this.typeRef = cb; }} floatingLabelText="Tipul sesizării" floatingLabelFixed value={this.state.value} onChange={this.setIncidentType} hintText="Alege tipul sesizării" fullWidth required className="dropdown" labelStyle={overflowElipsisStyle} listStyle={listStyle}>
                    <MenuItem value="0" primaryText="Toate" />
                    {this.props.incidentTypes.map((incident) => (
                      <MenuItem
                        key={incident.id}
                        value={incident.id}
                        label={incident.name}
                      >
                        <span className="menu-item">{incident.name}</span>
                      </MenuItem>
                    ))}
                  </SelectField>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6">
                <FileUploader upload={this.upload} file={this.props.image} />
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

              <div className="col-xs-12 col-sm-6">
                <div style={buttonWrapStyle}>
                  {isValid ?
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
                    :
                      <RaisedButton
                        buttonStyle={buttonStyleDisabled}
                        overlayStyle={buttonOverlayStyle}
                        labelStyle={buttonLabelStyle}
                        label="Adaugă sesizarea"
                        labelPosition="after"
                        icon={<AddCircleOutline style={buttonIconStyle} />}
                        fullWidth
                        className="button"
                      />
                  }
                </div>
              </div>
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
  resetForm: React.PropTypes.func,
  countyId: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  cityId: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  incidentId: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  token: React.PropTypes.string,
  image: React.PropTypes.object,
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
    resetForm: () => dispatch(resetFormAction()),
  };
}

const mapStateToProps = createStructuredSelector({
  name: getName(),
  prenume: getPrenume(),
  map: map(),
  cities: getCities(),
  precints: getPrecints(),
  description: getDescription(),
  countyId: countyId(),
  incidentId: getIncidentId(),
  cityId: cityId(),
  token: getToken(),
  image: getImage(),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftContainer);
