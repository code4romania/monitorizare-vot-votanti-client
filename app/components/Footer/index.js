import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icons from 'components/Icons';
import Code4RoLogo from './code4ro-logo.svg';

const Nav = ({ className }) => (
  <nav className={className}>
    <ul>
      <li>
        <a href="https://code4.ro/ro/legal/" rel="nooperner noreferrer">
          Legal
        </a>
      </li>
      <li>
        <a
          href="https://code4.ro/ro/codul-de-conduita/"
          rel="nooperner noreferrer"
        >
          Codul de Conduită
        </a>
      </li>
      <li>
        <a href="https://code4.ro/ro/implica-te/" rel="nooperner noreferrer">
          Implică-te
        </a>
      </li>
      <li>
        <a
          className="cta"
          href="https://code4.ro/ro/doneaza/"
          rel="nooperner noreferrer"
        >
          Donează
        </a>
      </li>
    </ul>
  </nav>
);

Nav.propTypes = {
  className: PropTypes.string,
};

const NavLinks = styled(Nav)`
  flex: 1;
  opacity: 1;
  ul {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    li {
      a {
        margin: 0 1rem;
        padding: 0.5rem;
        opacity: 0.8;
        &.cta {
          background-color: #ffda44;
          color: #5f288d;
          border-radius: 2px;
          opacity: 1;
          text-decoration: none;
        }
      }
    }
  }
`;

const SocialIconList = ({ className }) => (
  <ul className={className}>
    <li>
      <a
        href="https://www.facebook.com/code4romania/"
        rel="noopener noreferrer"
      >
        <Icons icon="facebook" />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/Code4Romania/" rel="noopener noreferrer">
        <Icons icon="twitter" />
      </a>
    </li>
    <li>
      <a target="_blank" href="https://github.com/code4romania/">
        <Icons icon="github" />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/Code4Romania/" rel="noopener noreferrer">
        <Icons icon="linkedin" />
      </a>
    </li>
  </ul>
);

SocialIconList.propTypes = {
  className: PropTypes.string,
};

const SocialLinks = styled(SocialIconList)`
  flex: 1;
  margin: 2.125rem 0 3.25rem;
  display: flex;
  justify-content: center;
  li {
    display: inline-block;
    margin: 0 1rem;
    i {
      height: 2rem;
      width: 2rem;
    }
  }
`;

const Logo = ({ className }) => (
  <a href="https://code4.ro/ro/" target="_blank" rel="noopener noreferrer">
    <img src={Code4RoLogo} className={className} alt="code for Romania" />
  </a>
);

Logo.propTypes = {
  className: PropTypes.string,
};

const Branding = styled(Logo)`
  width: 7rem;
  display: inline-block;
  margin-bottom: 1rem;
`;

const CopyText = styled.p`
  font-family: 'Source Code Pro', 'Courier New', Courier, monospace;
  font-size: 12px;
  font-weight: 700;
  opacity: 0.6;
  line-height: 1.7;
`;

const CopyWrapper = ({ className }) => (
  <div className={className}>
    <Branding />
    <CopyText>
      &copy; {new Date().getFullYear()} Code for Romania.
      <br />
      Organizație neguvernamentală independentă, neafiliată politic și
      apolitică.
    </CopyText>
  </div>
);

CopyWrapper.propTypes = {
  className: PropTypes.string,
};

const CopyInfo = styled(CopyWrapper)`
  flex: 1;
  text-align: center;
`;

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  padding: 3rem 1.5rem 6rem;
  border-top: 2px solid #ffda44;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  li {
    list-style-type: none;
  }
  img,
  svg {
    opacity: 0.6;
    &:hover {
      opacity: 1;
    }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <NavLinks />
    <SocialLinks />
    <CopyInfo />
  </FooterWrapper>
);

export default Footer;
