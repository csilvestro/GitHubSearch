import React from 'react';

function Explore() {
  const [pageTitle] = ['Explore'];
  return (
      <section style={styles.container}>
        <h1>{pageTitle}</h1>
        <p>Some stuff here</p>
        <p>Some stuff here</p>
      </section>
  );
}

export default Explore;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '99vh',
    paddingLeft: '2%'
  }
}