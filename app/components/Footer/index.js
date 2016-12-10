import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import Icons from 'components/Icons';

const FooterWrap = styled.footer`
  background: #fff;
  border-top: 4px solid #fdda44;
  padding: 60px 0;
`;

const Repos = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
  float: right;
  height: 30px;

  @media (min-width: 64em) {
    float: none;
    text-align: left;
    margin-left: 5px;
  }

  li {
    margin-left: 15px;
    display: inline;

    @media (min-width: 48em) {
      margin-left: 30px;
    }

    &:first-child {
      margin: 0;
    }

    a {
      font-family: "Source Code Pro", "Courier New", Courier, monospace;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 1px;
      text-decoration: none;
      opacity: 0.6;
      display: inline-block;

      &:hover {
        opacity: 1;
      }

      span {
        line-height: 30px;
        display: inline-block;
      }
    }
  }

  .svg-icon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`;

const MV = styled(Link)`
  float: left;
  margin-top: -5px;

  @media (min-width: 64em) {
    float: none;
  }

  &:hover {
    .svg-icon {
      opacity: 1;
    }
  }

  .svg-icon {
    color: #5F288D;
    width: 40px;
    height: 40px;
  }
`;

const Code4 = styled.div`
  margin: 30px 0 0;

  @media (min-width: 64em) {
    margin: 0 15px 0 0;
    text-align: right;
  }

  > a {
    color: #757575;

    &:hover {
      color: #2d2d2d;
    }
  }
`;

const Copyright = styled.p`
  font-family: "Source Code Pro", "Courier New", Courier, monospace;
  font-size: 12px;
  font-weight: 700;
  opacity: 0.6;

  @media (min-width: 64em) {
    margin-top: 30px;
  }

  &.vote {
    color: #5F288D;
  }
`;

export default function Footer() {
  return (
    <FooterWrap>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-5">

            <Repos>
              <li>
                <MV to="acasa">
                  <Icons icon="mvCircle" />
                </MV>
              </li>
              <li>
                <a target="_blank" href="https://github.com/code4romania/monitorizare-vot-votanti-client/">
                  <Icons icon="github" />
                  <span className="icon-text">/client</span>
                </a>
              </li>

              <li>
                <a target="_blank" href="https://github.com/code4romania/monitorizare-vot-votanti-api/">
                  <Icons icon="github" />
                  <span className="icon-text">/api</span>
                </a>
              </li>
            </Repos>

            <Copyright className="vote">
              Aici e nevoie de un text cu adresa de e-mail <a href="mailto:monitorizarevot@code4.ro">monitorizarevot@code4.ro</a>
            </Copyright>

          </div>

          <div className="col-xs-12 col-md-offset-1 col-md-6">
            <Code4>
              <a href="http://code4.ro/" target="_blank">
                <Icons icon="code4" />
              </a>
              <Copyright>
                &copy; 2016 Code for Society / Code for Romania.<br /> Organizație neguvernamentală independentă, neafiliată politic și apolitică.
              </Copyright>
            </Code4>
          </div>
        </div>
      </div>
    </FooterWrap>
  );
}
