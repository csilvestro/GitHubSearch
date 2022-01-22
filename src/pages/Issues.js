import React from 'react';

function Issues() {
  const [pageTitle] = ['Issues'];
  return (
      <section style={styles.container}>
        <h1>{pageTitle}</h1>
        <p>Some stuff here</p>
        <p>Some stuff here</p>
      </section>
  );
}

export default Issues;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '99vh',
    paddingLeft: '2%'
  }
}