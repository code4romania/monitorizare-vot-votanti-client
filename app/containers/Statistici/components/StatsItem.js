import React from 'react';

const styles = {
  item: {
    color: '#715696',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  title: {
    fontSize: '64px',
  },

  subtitle: {
    fontSize: '20px',
    textAlign: 'center',
  },
};

export default function StatsItem(props) {
  return (
    <div className="col-md-4" style={styles.item}>
      <h1 style={styles.title}> {props.title} </h1>
      <h2 style={styles.subtitle}> {props.subtitle} </h2>
    </div>
  );
}

StatsItem.propTypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
};
