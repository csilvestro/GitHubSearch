import React from 'react';
//React Router
import { Link } from 'react-router-dom'; 

const SearchNav = () =>{
    return (
      <nav style={styles.nav}>
        <div style={styles.linkCont}>
          <Link to="/Dashboard" style={styles.padding}>Repositories</Link>
          <Link to="/Dashboard" style={styles.padding}>12k</Link>
        </div>
        <div style={styles.linkCont}>
          <Link to="/Reports" style={styles.padding}>Code</Link>
          <Link to="/Dashboard" style={styles.padding}>12k</Link>
        </div>
        <div style={styles.linkCont}>
          <Link to="/Income" style={styles.padding}>Commits</Link>
          <Link to="/Dashboard" style={styles.padding}>12k</Link>
        </div>
        <div style={styles.linkCont}>
          <Link to="/Spending"style={styles.padding}>Issues</Link> 
          <Link to="/Dashboard" style={styles.padding}>12k</Link>
        </div>
        <div style={styles.linkCont}>
          <Link to="/Savings" style={styles.padding}>Discussions</Link>
          <Link to="/Dashboard" style={styles.padding}>12k</Link> 
        </div>
        <div style={styles.linkCont}>
          <Link to="/Savings" style={styles.padding}>Packages</Link> 
          <Link to="/Dashboard" style={styles.padding}>12k</Link>
        </div>
        <div style={styles.linkCont}>
          <Link to="/Savings" style={styles.padding}>Marketplace</Link> 
          <Link to="/Dashboard" style={styles.padding}>12k</Link>
        </div>
        <div style={styles.linkCont}>
          <Link to="/Savings" style={styles.padding}>Topics</Link> 
          <Link to="/Dashboard" style={styles.padding}>12k</Link>
        </div>
        <div style={styles.linkCont}>
          <Link to="/Savings" style={styles.padding}>Wikis</Link>
          <Link to="/Dashboard" style={styles.padding}>12k</Link>
        </div>
        <div style={styles.linkCont}>
          <Link to="/Savings" style={styles.padding}>Users</Link>
          <Link to="/Dashboard" style={styles.padding}>12k</Link>
        </div>
      </nav>
    );
  }
export default SearchNav;

const styles = {
  nav:  {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '0.9rem',
    color: 'white',
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
