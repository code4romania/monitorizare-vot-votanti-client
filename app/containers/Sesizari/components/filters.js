import React from 'react';
import styled from 'styled-components';
import Maps from 'components/selectCountry';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  selectedCountyAction,
  setActiveMapAction,
  setTypeAction,
  resetCountyAction,
  resetAllFiltersAction,
} from '../actions';
import { activeMap } from '../selectors';
import * as _ from 'lodash';
import RaisedButton from 'material-ui/RaisedButton';

const FiltersWrap = styled.section`
  background: #fdda44;
  padding: 30px 0;

  .map {
    margin-top: -10px;
  }

  .reset {
    margin-top: 29px;
  }
`;

const overflowElipsisStyle = {
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  position: 'absolute',
  width: '100%',
};

const buttonStyle = {
  backgroundColor: '#2d2d2d',
  height: '40px',
};

const buttonOverlayStyle = {
  height: '40px',
};

const buttonLabelStyle = {
  lineHeight: '40px',
  fontSize: '14px',
  fontWeight: '700',
  letterSpacing: '1px',
};

const listStyle = {
  display: 'block',
};

export class Filters extends React.PureComponent {
  constructor(props) {
    super(props);
    this.resetFilters = this.resetFilters.bind(this);
    this.state = {
      active: true,
      value: null,
    };
  }

  setActiveOption = (event) => {
    this.setState({ active: !this.state.active });
    this.props.setActiveMap(event.currentTarget.dataset.name);
    this.props.filterIncindents();
  };

  setIncindetType = (event, index, value) => {
    this.setState({ value });
    this.props.setType(value);
    this.props.filterIncindents();
  };

  selectCounty = (searchText, citiesArray) => {
    const getCity = _.find(citiesArray, (o) => o.text === searchText);
    if (_.isUndefined(getCity)) {
      this.props.resetCounty();
      this.props.filterIncindents();
    } else {
      this.props.selectedCounty(getCity.id);
      this.props.filterIncindents();
    }
  };

  selectCity = (event, index, value) => {
    this.props.setCity(value);
    this.props.filterIncindents();
  };

  resetFilters = () => {
    this.setState({ value: null });
    this.countyRef.setState({ searchText: '' });
    this.props.resetAllFilters();
    this.props.filterIncindents();
  };

  render() {
    return (
      <FiltersWrap className="interact">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="row interact-form">
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <Maps
                    half={false}
                    active={this.state.active}
                    setActiveOption={this.setActiveOption}
                  />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="types">
                    <SelectField
                      ref={(cb) => {
                        this.typeRef = cb;
                      }}
                      floatingLabelText="Tipul sesizarii"
                      floatingLabelFixed
                      value={this.state.value}
                      onChange={this.setIncindetType}
                      hintText="Alege tipul sesizarii"
                      fullWidth
                      className="dropdown"
                      labelStyle={overflowElipsisStyle}
                      listStyle={listStyle}
                    >
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
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <AutoComplete
                    ref={(cb) => {
                      this.countyRef = cb;
                    }}
                    style={
                      this.props.map === 'abroad' ? { display: 'none' } : {}
                    }
                    hintText="Cauta judetul"
                    floatingLabelText="Judetul"
                    floatingLabelFixed
                    fullWidth
                    openOnFocus
                    filter={AutoComplete.fuzzyFilter}
                    maxSearchResults={5}
                    dataSource={
                      this.props.counties.length > 0 ? this.props.counties : []
                    }
                    onUpdateInput={this.selectCounty}
                  />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <RaisedButton
                    label="Resetează"
                    buttonStyle={buttonStyle}
                    overlayStyle={buttonOverlayStyle}
                    labelStyle={buttonLabelStyle}
                    primary
                    className="reset"
                    onClick={this.resetFilters}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </FiltersWrap>
    );
  }
}

Filters.propTypes = {
  counties: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
  incidentTypes: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
  selectedCounty: React.PropTypes.func,
  setActiveMap: React.PropTypes.func,
  resetCounty: React.PropTypes.func,
  resetAllFilters: React.PropTypes.func,
  filterIncindents: React.PropTypes.func,
  setType: React.PropTypes.func,
  setCity: React.PropTypes.func,
  map: React.PropTypes.string,
};

export function mapDispatchToProps(dispatch) {
  return {
    selectedCounty: (cityId) => dispatch(selectedCountyAction(cityId)),
    setActiveMap: (map) => dispatch(setActiveMapAction(map)),
    setType: (id) => dispatch(setTypeAction(id)),
    resetCounty: () => dispatch(resetCountyAction()),
    resetAllFilters: () => dispatch(resetAllFiltersAction()),
  };
}

const mapStateToProps = createStructuredSelector({
  map: activeMap(),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
