import React from 'react';
import Helmet from 'react-helmet';
import settings from './settings';
import Tile from './components/tile';
import Title from './components/title';
import { GridList } from 'material-ui/GridList';
import * as _ from 'lodash';
import TileContent from './components/tileContent';

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
    const currentTabData = _.find(settings, (item) => item.id === this.state.activeTab);
    return (
      <div>
        <Helmet
          title="Reguli vot - Monitorizare Vot"
          meta={[
            { name: 'description', content: 'Reguli vot' },
          ]}
        />
        <Title />
        <div className="row">
          <GridList cols={8.2} padding={5} cellHeight={130}>
            {settings.map((item, index) =>
              <Tile {...item} key={index} selectItem={this.selectItem} activeTab={this.state.activeTab} />
            )}
          </GridList>
          <TileContent>{currentTabData.content}</TileContent>
        </div>
      </div>
    );
  }
}
