import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 10px 0 0;
  float: right;
  display: none;

  @media (min-width: 64em) {
    display: block;
  }
`;

const CustomMenuItem = styled.li`
  display: inline-block;

  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  display: inline-block;
  line-height: 20px;
  padding: 20px;
  color: #5F288D;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;

  &:active,
  &:focus {
    color: #5F288D;
  }

  &.selected {
    background: #5F288D;
    color: #fff;
  }
`;

const DonateMenuLink = styled(MenuLink)`
  color: #22B968;

  &:active,
  &:focus {
    color: #22B968;
  }
`;

const LanguageSelector = styled(SelectField)`
  maxWidth: 100px; 
  display: inline-flex; 
  marginTop: -20px;
`;

export default class Menu extends React.PureComponent {

  // PLACEHOLDER FOR FUNCTIONALITY
  state = {
    value: 1,
  };
  componentDidMount() {
    const path = this.props.pathname.split('/');
    const getLocation = path[1] || path[0];

    if (this.props.pathname.length > 1 && this.props.pathname !== '/multumim') {
      document.getElementById(getLocation).parentNode.querySelector('.selected').classList.remove('selected');
      document.getElementById(getLocation).firstElementChild.classList.add('selected');
    } else {
      // document.querySelector('#menu-list .selected').classList.remove('selected');
    }
  }
  // PLACEHOLDER FOR FUNCTIONALITY
  handleChange = (event, index, value) => this.setState({ value });

  render() {
    const ROstyle = {
      background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA2ElEQVR4Xu3awQ2DQAxE0aUD+sgtFdAZZdBBCsoxTaQBJJCQSBqYi+VHAdZiz3jtr51G829q/v9DAiigeQZYoLkANEEWYIHmGWCBnwAe65EUw/7akuHGe5mj8Z7fz1X8vwIkgAJYIGkyPUATdAskHeUaNAcYhEyC0Z5iFLYLWIZsg9ZhPAAQQYQgMVD0zgAoCoqCosl1CxQFRUHRpKNAUVAUFAVFoz0FFAVFQVFQFBQFRUFRj6W9FI2OVwWDUUDBokWPTAHRdBYMRgEFixY9MgVE01kwWHsFnD90GFD0ppYyAAAAAElFTkSuQmCC)',
    };
    const ENstyle = {
      background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEDklEQVR4Xu2abUhTURjHn4Vk0sIMNulNg4KKwCClFz+4hAj9JIYwCSlW4UBQCqEPIYkhfQikUBAm1SgkHEjiJyUCmx/sBQ0SooKC7BU3cEULNaQb586z7t2mOy/PFS737uPuvWfP+f3/55znee4cYPGPw+LzBxuA7QCLE7CXgMUNYG+C9hKwl4DFCdhLgBrgg9erFPX0QI7LlfTE18hvuNA5DqMTn1F8okw2quNMOTJzL1UU9bqjrA/l9w4fcMP9a8eh8OUYzPj9sBSNqvMj89xSX68GkYxkEkAhF4sDAdhcW6sLoO/hG7jc/Rx+xv9IBbZWAPJyc6CzqQxaTm6FT83NEAuF1LjJvMj8yDwdjoQKSQDvPB7lVzis3ljg9aqUsN2wFgCOlRRCsN2TUXUyL/pJA/BlNq7k9AfgW3s7/I3H1clju8FIACyq08lHYwvg3pKnd0C+J6h0XToKDSW5MOPzgRFuMAoAq+oEwNDYR/BfH4fo47N6AFAaUHegqvKdcLutAoxwAzYAXtUvdk3Ag9H3CSNM+TMDINfyneshoxvq6qCot1d4b8AEIKR6bOH/Jr4aAHoXthswAEiprj3DWABgu0EWgLTqIgBE3HBn+C203nyWljeIAkBTXQYAhhtEAKCqLgtA1g08AAxRHQuAqBtGuqsTJ1CWWqD83DBTNqc717U7PEvCzroJZhuL56SgY2UDQIqWlXJ4bTanO9ezBZp6HQsArxtYHPDK7dZVbtocXkr11ZaAoizXorwkBe7P5gCBIbkfSSuGLA+A9AO4MZr4gbLlVoCuIWLi+XCHbgOwHZDohtlLgC4ey2+Clj8GLQ+A9gS5zxMAcBVsgMCVCqit3KV7nPTjSU5PX0gcjESYiiE6iFoTNDVBbHBQ/WqTxwPFwSD0Ty9m7DdwxY5VC5yu2gO3WstVCNrAyZuYH0ND6lep7xl4U2EyDn2zs87phG0dHbDU4Jd7ayULgFV18m5h9lAl+DrCMHG3hskB1S0jamd6u3ujDiqqG2QA8Kje/eg7tPVOwvziEvA0RGhn+nzNPp2z0dwgAkBE9afTs8kJ8ACgD9F+A7obeAGIqq6VTwSAtt+A6gZWALKqYwAwxA0sADBUxwRA3XCj5Qg0ntovtzesBgBTdWwAaG5YCQC26kYBkHZDKgDXiXsKSzanPde1OzxLFia6CWYbe8WTQvPvkLQsMuzTl8ORuXmFJZvTnuvZAku9bhQAETfsKHTqAWiLodQcXkZ1I5dAJgFY3bA3HE4HQIqPTDm8jOprDYDVDWk9wbmBAUVbuVHVz1x9Ai9eJ6o42Y+RS4DXDbtDoZR/iMjOzqTP2/8UNalwaGHbDkBDadKBbAeYVDi0sG0HoKE06UC2A0wqHFrYlnfAP5B0jH3CdGNoAAAAAElFTkSuQmCC)',
    };
    const HUstyle = {
      background: 'url(data:image/png;base64,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)',
    };
    const style = {
      position: 'absolute',
      top: 0,
      left: 0,
      height: 25,
      width: 25,
      margin: '4px 0px 0px 20px',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
    };
    return (
      <MenuList id="menu-list">
        <CustomMenuItem id="acasa"><MenuLink to="acasa" className="selected">Adaugă o sesizare</MenuLink></CustomMenuItem>
        <CustomMenuItem id="sesizari"><MenuLink to="sesizari">Sesizări</MenuLink></CustomMenuItem>
        <CustomMenuItem id="statistici"><MenuLink to="statistici">Statistici</MenuLink></CustomMenuItem>
        <CustomMenuItem id="reguli-vot"><MenuLink to="reguli-vot">Reguli vot</MenuLink></CustomMenuItem>
        <CustomMenuItem id="despre-noi"><MenuLink to="despre-noi">Despre noi</MenuLink></CustomMenuItem>
        <CustomMenuItem id="doneaza"><DonateMenuLink href="https://code4.ro/doneaza/" target="_blank">Donează</DonateMenuLink></CustomMenuItem>
        <CustomMenuItem id="select-limba">
          <div style={{ display: 'inline-flex' }}>
            <LanguageSelector
              value={this.state.value}
              onChange={this.handleChange}
              autoWidth={false}
            >
              <MenuItem
                value={1}
                primaryText="RO"
                leftIcon={<div style={{ ...ROstyle, ...style }} className="class" />}
              />
              <MenuItem
                value={2}
                primaryText="EN"
                leftIcon={<div style={{ ...ENstyle, ...style }} className="class" />}
              />
              <MenuItem
                value={3}
                primaryText="HU"
                leftIcon={<div style={{ ...HUstyle, ...style }} className="class" />}
              />
            </LanguageSelector>
          </div>
        </CustomMenuItem>
      </MenuList>
    );
  }
}

Menu.propTypes = {
  pathname: React.PropTypes.string,
};
