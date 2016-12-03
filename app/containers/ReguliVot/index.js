import React from 'react';
import Helmet from 'react-helmet';
import * as _ from 'lodash';
import styled from 'styled-components';

import rules from './rules';

import Hero from './components/hero';
import ItemRule from './components/item-rule';

const Content = styled.div`
  margin: 30px 0 120px;
`;

const Scroller = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  @media (min-width: 48em) {
    overflow-x: hidden;
  }

  .scroll-table {
    display: table;
    width: 1000px;

    @media (min-width: 48em) {
      display: block;
      width: auto;
    }
  }

  .row-inline {
    display: table-row;

    @media (min-width: 48em) {
      display: flex;
    }
  }

  .rule {
    display: table-cell;
    vertical-align: top;
    padding: 0;
    margin-bottom: 0;
    width: 10%;

    @media (min-width: 48em) {
      width: auto;
      display: inherit;
      margin-bottom: 30px;
      padding: 0 15px;
    }
  }

  .rule-item {
    background: #ffda44;
    color: #5F288D;
    text-align: center;
    padding: 20px;
    height: 140px;
    display: block;

    @media (min-width: 48em) {
      height: auto;
      width: 100%;
    }

    strong {
      margin-top: 10px;
      display: block;
    }

    &.active {
      background: #5F288D;
      color: #ffffff;
    }
  }
`;

export default class ReguliVot extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
    };
  }

  selectItem = (ev) => {
    this.setState({
      activeTab: parseInt(ev.currentTarget.id, 10),
    });
  }

  render() {
    const currentTabData = _.find(rules, (item) => item.id === this.state.activeTab);

    return (
      <div>
        <Helmet
          title="Reguli vot - Monitorizare Vot"
          meta={[
            { name: 'description', content: 'Reguli vot' },
          ]}
        />
        <Hero />
        <section className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-offset-1 col-sm-10 col-lg-offset-2 col-lg-8">
              <Scroller>
                <div className="scroll-table">
                  <div className="row row-inline">
                    {rules.map((item, index) =>
                      <ItemRule {...item} key={index} selectItem={this.selectItem} activeTab={this.state.activeTab} />
                    )}
                  </div>
                </div>
              </Scroller>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-offset-1 col-sm-10 col-lg-offset-3 col-lg-6">
              <Content dangerouslySetInnerHTML={{ __html: currentTabData.content }} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
