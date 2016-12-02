import React from 'react';
import Helmet from 'react-helmet';
import * as _ from 'lodash';

import rules from './rules';

import Hero from './components/hero';
import Rule from './components/rule';
import Content from './components/content';

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
            <Content>{currentTabData.content}</Content>
          </div>
        </section>
      </div>
    );
  }
}
