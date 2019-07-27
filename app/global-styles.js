/* eslint-disable no-unused-expressions */

import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    background: #fff;
    color: #2d2d2d;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
  }

  p {
    line-height: 1.7;
  }

  a {
    color: #5F288D;
  }

  .container {
    padding-left: 16px;
    padding-right: 16px;

    @media (min-width: 75em) {
      padding: 0;
    }
  }

  .page-hero {
    text-align: center;
    padding: 20px 20px 40px;

    h1 {
      font-size: 32px;
      line-height: 1.17;

      @media (min-width: 48em) {
        font-size: 42px;
      }
    }

    p {
      font-size: 18px;
    }
  }

  .page-hero-content {
    padding: 20px 20px 0;
  }

  .cta-wrap {
    margin: 30px 0 20px;
    text-align: center;
  }

  .bottom-cta {
    text-align: center;
    padding: 60px 0;
  }

  .form-col {
    background: #fdda44;
  }

  .row {
    margin-left: -15px;
    margin-right: -15px;
  }

  { /* rewrite sometime */ }
  .col-xs, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-offset-0, .col-xs-offset-1, .col-xs-offset-10, .col-xs-offset-11, .col-xs-offset-12, .col-xs-offset-2, .col-xs-offset-3, .col-xs-offset-4, .col-xs-offset-5, .col-xs-offset-6, .col-xs-offset-7, .col-xs-offset-8, .col-xs-offset-9, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-offset-0, .col-sm-offset-1, .col-sm-offset-10, .col-sm-offset-11, .col-sm-offset-12, .col-sm-offset-2, .col-sm-offset-3, .col-sm-offset-4, .col-sm-offset-5, .col-sm-offset-6, .col-sm-offset-7, .col-sm-offset-8, .col-sm-offset-9, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-offset-0, .col-md-offset-1, .col-md-offset-10, .col-md-offset-11, .col-md-offset-12, .col-md-offset-2, .col-md-offset-3, .col-md-offset-4, .col-md-offset-5, .col-md-offset-6, .col-md-offset-7, .col-md-offset-8, .col-md-offset-9, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-offset-0, .col-lg-offset-1, .col-lg-offset-10, .col-lg-offset-11, .col-lg-offset-12, .col-lg-offset-2, .col-lg-offset-3, .col-lg-offset-4, .col-lg-offset-5, .col-lg-offset-6, .col-lg-offset-7, .col-lg-offset-8, .col-lg-offset-9 {
    padding-left: 15px;
    padding-right: 15px;
  }

  .interact-form {
    font-weight: 700;
  }

  #g-recaptcha {
    margin: 15px 0 20px;
  }

  .interact {
    { /* stiluri care suprascriu TextInput si toate underline-urile material de form elements not proud of this.. ce alternative sunt? */ }
    hr {
      bottom: 2px !important;
    }

    .types svg {
      fill: rgba(95, 40, 141, 0.6) !important;
    }
  }

  button {
    -webkit-appearance: none;
    -webkit-border-radius: 0px;
  }

  span[type="button"] > div {
    background: #fff !important;
  }

  [required] {
    box-shadow: none !important;
    outline: none !important;
  }

  .button svg {
    top: -2px;
    position: relative;
  }

  .menu-item {
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
  
  .activeTab {
    background: white !important;
  }
`;
