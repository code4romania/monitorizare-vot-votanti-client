import React from 'react';

const styles = {
  wrapper: {
    background: '#FFCC00',
    color: '#5F288D',
    margin: '15px',
    padding: '35px',
  },

  title: {
    alignSelf: 'center',
    fontSize: '48px',
    fontWeight: '900',
    margin: 0,
    padding: 0,
  },

  subtitle: {
    fontSize: '24px',
    fontWeight: '500',
    opacity: '0.7',
    margin: 0,
    padding: 0,
  },

  titleWrapper: {
    alignSelf: 'center',
  },

  subtitleWrapper: {
    alignSelf: 'center',
  },
};

export default function StatsItem(props) {
  return (
    <div className="col-md-6 col-xs-12">
      <div className="row" style={styles.wrapper}>
        <div className="col-md-6 col-xs-12" style={styles.titleWrapper}>
          <h1 style={styles.title}> {props.title} </h1>
        </div>

        <div className="col-md-6 col-xs-12" style={styles.subtitleWrapper}>
          <h2 style={styles.subtitle}> {props.subtitle} </h2>
        </div>
      </div>
    </div>
  );
}

StatsItem.propTypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
};
