import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import Menu from 'components/Menu';
import Icons from 'components/Icons';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import OverlayNav from './OverlayNav';

const HeaderWrap = styled.div`
  background: #fdda44;
  padding: 10px 0;

  @media (min-width: 64em) {
    padding: 0;
  }
`;

const LogoType = styled(Link)`
  display: block;
  float: left;
  margin-left: 10px;

  @media (min-width: 48em) {
    margin-left: 0;
  }

  @media (min-width: 64em) {
    margin-top: 10px;
    height: 40px;
  }

  img {
    width: auto;
    height: 100%;
  }
`;

const Burger = styled.button`
  cursor: pointer;
  float: right;
  display: inline-block;
  margin: 5px 10px 0 0;
  padding: 0;

  @media (min-width: 64em) {
    display: none;
  }
`;

const burgerStyles = {
  width: '30px',
  height: '30px',
};

export default class Header extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showNav: false,
    };
  }

  handleToggleNav = () => {
    this.setState({ showNav: !this.state.showNav });
  }

  render() {
    return (
      <HeaderWrap>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <LogoType to="acasa" className="brand">
                <Icons icon="mv" />
              </LogoType>
              <Menu {...this.props} />
              { !this.state.showNav ? <Burger onClick={this.handleToggleNav}>
                <MenuIcon style={burgerStyles} />
              </Burger> : '' }
            </div>
          </div>
        </div>

        <OverlayNav show={this.state.showNav} handleToggleNav={this.handleToggleNav} />
      </HeaderWrap>
    );
  }
}
