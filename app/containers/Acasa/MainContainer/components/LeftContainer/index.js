import React from 'react';
import { connect } from 'react-redux';
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
import { createStructuredSelector } from 'reselect';
import { setNumeAction, setPrenumeAction, setActiveMapAction, resetCountyAction, setCountyAction, getCitiesAction, getPrecintsAction, setCityAction } from '../../../actions';
import { getName, getPrenume, getCities, getPrecints } from '../../../selectors';
import * as _ from 'lodash';

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

export class LeftContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      nume: '',
      prenume: '',
      description: {
        value: '',
        characterCount: 0,
      },
      tipulDeProblema: {
        value: 'Alege tipul sesizarii',
      },
      prezenta: false,
      active: true,
    };
  }

  setActiveOption = () => {
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

  render() {
    return (
      <StickyContainer className="col-xs-12 col-lg-6 form-col">
        <div className="interact">
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
                  filter={AutoComplete.fuzzyFilter}
                  maxSearchResults={5}
                  value=""
                  dataSource={this.props.counties.length > 0 ? this.props.counties : []}
                  onUpdateInput={this.selectCounty}
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
                  filter={AutoComplete.fuzzyFilter}
                  maxSearchResults={35}
                  value=""
                  dataSource={this.props.cities.length > 0 ? this.props.cities : []}
                  onUpdateInput={this.selectCity}
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
                  value=""
                  dataSource={this.props.counties.length > 0 ? this.props.counties : []}
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
        </div>
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
  counties: React.PropTypes.array,
  cities: React.PropTypes.array,
  name: React.PropTypes.string,
  prenume: React.PropTypes.string,
};

export function mapDispatchToProps(dispatch) {
  return {
    setNume: (name) => dispatch(setNumeAction(name)),
    setPrenume: (prenume) => dispatch(setPrenumeAction(prenume)),
    setActiveMap: (map) => dispatch(setActiveMapAction(map)),
    setCounty: (id) => dispatch(setCountyAction(id)),
    resetCounty: () => dispatch(resetCountyAction()),
    getCities: () => dispatch(getCitiesAction()),
    getPrecints: () => dispatch(getPrecintsAction()),
    setCity: (id) => dispatch(setCityAction(id)),
  };
}

const mapStateToProps = createStructuredSelector({
  name: getName(),
  prenume: getPrenume(),
  cities: getCities(),
  precint: getPrecints(),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftContainer);
