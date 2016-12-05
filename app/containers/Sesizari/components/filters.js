import React from 'react';
import styled from 'styled-components';
import Maps from 'components/selectCountry';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectedCountyAction } from '../actions';
import { cities } from '../selectors';
import * as _ from 'lodash';

const FiltersWrap = styled.section`
  background: #fdda44;
  padding: 30px 0;
`;

const overflowElipsisStyle = {
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
};

export class Filters extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      value: null,
    };
  }

  setActiveOption = () => {
    this.setState({ active: !this.state.active });
  }

  selectCounty = (searchText, citiesArray) => {
    const getCity = _.find(citiesArray, (o) => o.text === searchText);
    this.props.selectedCounty(getCity.id);
    this.setState({ searchText });
  };

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <FiltersWrap className="interact">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <Maps half={false} active={this.state.active} setActiveOption={this.setActiveOption} />
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="types">
                    <SelectField floatingLabelText="Tipul sesizarii" floatingLabelFixed value={this.state.value} onChange={this.handleChange} hintText="Alege tipul sesizarii" fullWidth className="dropdown" labelStyle={overflowElipsisStyle}>
                      {this.props.incidentTypes.map((incident) =>
                        <MenuItem key={incident.id} code={incident.code} value={incident.id} primaryText={incident.name} />,
                      )}
                    </SelectField>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3">
                  <AutoComplete hintText="Cauta judetul" floatingLabelText="Judetul" floatingLabelFixed fullWidth openOnFocus filter={AutoComplete.fuzzyFilter} maxSearchResults={5} dataSource={this.props.counties} onUpdateInput={this.selectCounty} />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <AutoComplete hintText="Cauta orasul" floatingLabelText="Orasul" floatingLabelFixed fullWidth openOnFocus filter={AutoComplete.fuzzyFilter} maxSearchResults={45} dataSource={this.props.citiesPerCounty} onUpdateInput={this.handleUpdateInput} />
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
  citiesPerCounty: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
  incidentTypes: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
  selectedCounty: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    selectedCounty: (cityId) => dispatch(selectedCountyAction(cityId)),
  };
}

const mapStateToProps = createStructuredSelector({
  citiesPerCounty: cities(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
