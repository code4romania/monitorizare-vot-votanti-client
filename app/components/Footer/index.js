import React from 'react';
import styled from 'styled-components';
import Icons from 'components/Icons';

const FooterWrap = styled.footer`
  background: #fff;
  border-top: 4px solid #fdda44;
  padding: 60px 0;

  .text-right {
    text-align: right;
  }

  .icon-wrapper {
    opacity: 0.6;

    .icon-text {
      margin-left: 10px;
      font-size: 14px;
    }
  }

  .icon-wrapper:hover {
    opacity: 1;
  }

  .media-container {
    margin-bottom: 30px;
  }

  .project-description {
    font-family: monospace;
  }

  .social {
    padding: 0;
    list-style: none;

    li {
      margin-right: 35px;
      display: inline;
    }

    .svg-icon {
      width: 25px;
      height: 25px;
    }
  }
`;

export default function Footer() {
  return (
    <FooterWrap>
      <div className="container">
        <div className="row">
          <div className="col-md-12 media-container">

            <ul className="social">
              <li>
                <a className="icon-wrapper" href="#" target="_blank">
                  <Icons icon="twitter" />
                </a>
              </li>

              <li>
                <a className="icon-wrapper" href="#" target="_blank">
                  <Icons icon="facebook" />
                </a>
              </li>
            </ul>

            <ul className="social">
              <li>
                <a className="icon-wrapper" href="#" target="_blank">
                  <Icons icon="github" />
                  <span className="icon-text">/client</span>
                </a>
              </li>

              <li>
                <a className="icon-wrapper" href="#" target="_blank">
                  <Icons icon="github" />
                  <span className="icon-text">/api</span>
                </a>
              </li>
            </ul>

          </div>

          <div className="col-md-6 col-xs-12">
            <a className="icon-wrapper" href="#" target="_blank">
              <Icons icon="mvCircle" />
              <span className="icon-text">Monitorizare Vot</span>
            </a>
            <p className="project-description">
              © 2016 Code for Society / Code for Romania.<br />
              Organizație neguvernamentală independentă,<br /> neafiliată politic și apolitică.
            </p>
          </div>

          <div className="col-md-6 col-xs-12 text-right">
            <a className="icon-wrapper" href="http://code4.ro/" target="_blank">
              <Icons icon="code4" />
            </a>
            <p className="project-description">
              © 2016 Code for Society / Code for Romania.<br />
              Organizație neguvernamentală independentă,<br /> neafiliată politic și apolitică.
            </p>
          </div>
        </div>
      </div>
    </FooterWrap>
  );
}
