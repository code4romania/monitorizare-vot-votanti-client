import React from 'react';

const styles = {
  wrapper: {
    background: '#FFCC00',
    color: '#5F288D',
    margin: '15px',
    padding: '35px',
  },

  title: {
    fontSize: '35px',
    fontWeight: '800',
  },

  subtitle: {
    fontSize: '15px',
  },
};

export default function StatsItem(props) {
  return (
    <div className="col-md-6 col-xs-12">
      <div className="row" style={styles.wrapper}>
        <div className="col-md-6 col-xs-12">
          <h1 style={styles.title}> {props.title} </h1>
        </div>

        <div className="col-md-6 col-xs-12">
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
