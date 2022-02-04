import React from 'react';
//React Router
import { Link } from 'react-router-dom'; 

const LanguagesNav = () =>{
    return (
      <nav style={styles.nav}>
        <h6>
          Languages
        </h6>
        <div style={styles.linkCont}>
          <Link to="/Reports" style={styles.padding}>HTML</Link>
          <Link to="/Dashboard" style={styles.padding}>12k</Link>
        </div>
        <div style={styles.linkCont}>
          <Link to="/Income" style={styles.padding}>JavaScript</Link>
          <Link to="/Dashboard" style={styles.padding}>12k</Link>
        </div>
        <div style={styles.linkCont}>
          <Link to="/Spending"style={styles.padding}>Jupyter Notebook</Link> 
          <Link to="/Dashboard" style={styles.padding}>12k</Link>
        </div>
        <div style={styles.linkCont}>
          <Link to="/Savings" style={styles.padding}>Python</Link>
          <Link to="/Dashboard" style={styles.padding}>12k</Link> 
        </div>
        <div style={styles.linkCont}>
          <Link to="/Savings" style={styles.padding}>Java</Link> 
          <Link to="/Dashboard" style={styles.padding}>12k</Link>
        </div>
        <div style={styles.linkCont}>
          <Link to="/Savings" style={styles.padding}>CSS</Link> 
          <Link to="/Dashboard" style={styles.padding}>12k</Link>
        </div>
        <div style={styles.linkCont}>
          <Link to="/Savings" style={styles.padding}>C#</Link> 
          <Link to="/Dashboard" style={styles.padding}>12k</Link>
        </div>
        <div style={styles.linkCont}>
          <Link to="/Savings" style={styles.padding}>Ruby</Link>
          <Link to="/Dashboard" style={styles.padding}>12k</Link>
        </div>
        <div style={styles.linkCont}>
          <Link to="/Savings" style={styles.padding}>TypeScript</Link>
          <Link to="/Dashboard" style={styles.padding}>12k</Link>
        </div>
        <div style={styles.linkCont}>
          <Link to="/Savings" style={styles.padding}>Swift</Link>
          <Link to="/Dashboard" style={styles.padding}>12k</Link>
        </div>
      </nav>
    );
  }
export default LanguagesNav;

const styles = {
  nav:  {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '0.9rem',
    color: 'black',
    border: '1px solid lightgrey',
    borderRadius: 7,
    width: 200,
    margin: 25,
  },
  padding: {
    padding: 10,
    color: 'black',
    alignItems: 'center'
  },
  linkCont: {
    display:'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid lightgrey',
  }
};
