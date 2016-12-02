import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  body {
    background: #f9f9f9;
    color: #2d2d2d;
    font-family: 'Open Sans', sans-serif;
  }

  span[type="button"] {
    background: #f00 !important;
    border: 0 !important;
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

    p {
      font-size: 16px;
    }
  }

  .form-col {
    background: #ffcc00;
  }

  .row {
    margin-left: -15px;
    margin-right: -15px;
  }

  .col-xs-12,
  .col-sm-6 {
    padding-left: 15px;
    padding-right: 15px;
  }

  .interact {
    { /* stiluri care suprascriu TextInput si toate underline-urile material de form elements not proud of this.. ce alternative sunt? */ }
    hr {
      bottom: 2px !important;
    }

    svg {
      fill: rgba(95, 40, 141, 0.6) !important;
    }

    .dropdown {
      { /* background: #00f !important; */ }

      div {
        { /* textul */ }
        { /* color: rgba(95, 40, 141, 0.6) !important; */ }
      }
    }
  }

  span[type="button"] > div {
    background: #fff !important;
  }
`;
