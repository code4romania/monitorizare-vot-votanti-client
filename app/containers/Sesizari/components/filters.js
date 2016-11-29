import React from 'react';
import styled from 'styled-components';
import Map from 'components/selectCountry';

const FiltersWrap = styled.section`
  background: #ffcc00;
  padding: 30px 0;
`;

export class Filters extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
  }

  setActiveOption = () => {
    this.setState({ active: !this.state.active });
  }
  render() {
    return (
      <FiltersWrap>
        <div className="container">
          <div className="row">
            <div id="map" className="col-md-6">
              <Map half={false} active={this.state.active} setActiveOption={this.setActiveOption} />
            </div>
            <div id="map" className="col-md-6">
              Text Field
            </div>
          </div>
        </div>
      </FiltersWrap>
    );
  }
}

export default Filters;
