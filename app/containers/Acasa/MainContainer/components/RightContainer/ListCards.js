/**
 * Created by dcorde on 08.11.2016.
 */
import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import { List } from 'material-ui/List';

const styles = {
  card: {
    backgroundColor: '#71637C',
    marginTop: '1.5rem',
  },
  avatar: {
    marginRight: 0,
  },
  cardHeader: {
    paddingTop: '1.5rem',
    paddingBottom: '1rem',
  },
};

export default class ListCards extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <List>
        <Card style={styles.card}>
          <CardHeader
            title="Nicu, Vrancea, Adjud, 3224, Campanie electorala in ziua votului"
            subtitle="In sectia 3224 din Adjud erau materiale electorale peste tot prin sectie, inclusiv in cabina de vot. Nu mi s-a raspuns nimic cand am intrebat despre ele."
            titleColor="white"
            subtitleColor="white"
            style={styles.cardHeader}
            avatar={
              <Avatar
                icon={<FontIcon className="material-icons">&#xE55F;</FontIcon>}
                size={100}
                backgroundColor="#71637C"
                style={styles.avatar}
              />
            }
          />
        </Card>
        <Card style={styles.card}>
          <CardHeader
            title="Mihai, Timisoara, 5423, Altele"
            subtitle="La Timisoara, presedintele sectiei a intrat in cabina cu alegatorul. Vedeti-i in imagine cand au iesit."
            titleColor="white"
            subtitleColor="white"
            style={styles.cardHeader}
            avatar={
              <Avatar
                icon={<FontIcon className="material-icons">&#xE55F;</FontIcon>}
                size={100}
                backgroundColor="#71637C"
                style={styles.avatar}
              />
            }
          />
        </Card>
        <Card style={styles.card}>
          <CardHeader
            title="LALALALLALALALA"
            subtitle="More of that LALALALAL lALLL  aldllsalslals. Am zis sa pun si niste elefanti aici :))."
            titleColor="white"
            subtitleColor="white"
            style={styles.cardHeader}
            avatar={
              <Avatar
                icon={<FontIcon className="material-icons">&#xE55F;</FontIcon>}
                size={100}
                backgroundColor="#71637C"
                style={styles.avatar}
              />
            }
          />
        </Card>
      </List>
    );
  }
}
