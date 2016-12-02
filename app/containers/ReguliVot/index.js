import React from 'react';
import Helmet from 'react-helmet';
import * as _ from 'lodash';
import styled from 'styled-components';

import rules from './rules';

import Hero from './components/hero';
import Rule from './components/rule';

const Content = styled.div`
  margin: 60px 0 120px;
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
            {rules.map((item, index) =>
              <Rule {...item} key={index} selectItem={this.selectItem} activeTab={this.state.activeTab} />
            )}
            <Content dangerouslySetInnerHTML={{ __html: currentTabData.content }} />
          </div>
        </section>
      </div>
    );
  }
}
