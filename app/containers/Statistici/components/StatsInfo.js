import React from 'react';

const styles = {
  title: {
    fontSize: '36px',
    fontWeight: '900',
  },

  description: {
    fontSize: '16px',
    fontWeight: '100',
  },

  lastUpdate: {
    fontSize: '12px',
    fontWeight: '300',
  },
};

export default function StatsInfo() {
  return (
    <div className="row center-xs">
      <div className="col-md-12">
        <h2 style={styles.title}>Statistici in timp real</h2>
      </div>

      <div className="col-md-4 col-xs-12">
        <h3 style={styles.description}>Astonishment with pretty stories for which theres little good evidence, Cambrian explosion. Shores of the cosmic ocean Euclid, at the edge of forever intelligent beings, tingling of the spine Drake Equation vanquish the impossible, with pretty stories for which theres little good evidence descended.</h3>
      </div>

      <div className="col-md-12">
        <p style={styles.lastUpdate}>Ultima actualizare a fos la 15:34:30 11 Decembrie 2016</p>
      </div>
    </div>
  );
}
