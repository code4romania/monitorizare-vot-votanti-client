import React from 'react';
import styled from 'styled-components';
import Maps from 'components/selectCountry';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

const FiltersWrap = styled.section`
  background: #fdda44;
  padding: 30px 0;

  @media (min-width: 48em) {
    padding-top: 10px;
  }

  .map {
    margin-top: 0;

    @media (min-width: 48em) {
      margin-top: 28px;
    }

    .map-label {
      @media (min-width: 48em) {
        display: inline-block;
      }
    }
  }
`;

const mocks = {
  judete: [
    { text: 'Alba Iulia', value: 1 },
    { text: 'Brasov', value: 2 },
    { text: 'Bucuresti', value: 3 },
    { text: 'Cluj', value: 4 },
    { text: 'Iasi', value: 5 },
    { text: 'Vaslui', value: 6 },
  ],
  incidentTypes: [
    <MenuItem key={1} value={1} primaryText="Altele" />,
    <MenuItem key={2} value={2} primaryText="Campanie electorală în ziua votului" />,
    <MenuItem key={3} value={3} primaryText="Media & internet" />,
    <MenuItem key={4} value={4} primaryText="Mită electorală" />,
  ],
};

export class Filters extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      dataSource: mocks.judete,
      value: null,
    };
  }

  setActiveOption = () => {
    this.setState({ active: !this.state.active });
  }

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <FiltersWrap className="interact">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-offset-1 col-md-10">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <Maps half={false} active={this.state.active} setActiveOption={this.setActiveOption} />
                </div>

                <div className="col-xs-12 col-sm-6">
                  <SelectField floatingLabelText="Tipul sesizarii" floatingLabelFixed value={this.state.value} onChange={this.handleChange} hintText="Alege tipul sesizarii" fullWidth className="dropdown" style={{ color: '#ff0000' }}>
                    {mocks.incidentTypes}
                  </SelectField>
                </div>

                <div className="col-xs-12 col-sm-6">
                  <AutoComplete hintText="Alege judetul" floatingLabelText="Judetul" fullWidth openOnFocus dataSource={this.state.dataSource} onUpdateInput={this.handleUpdateInput} />
                </div>

                <div className="col-xs-12 col-sm-6">
                  <AutoComplete hintText="Alege orasul" floatingLabelText="Orasul" fullWidth openOnFocus dataSource={this.state.dataSource} onUpdateInput={this.handleUpdateInput} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </FiltersWrap>
    );
  }
}

export default Filters;
