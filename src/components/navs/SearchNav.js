import React from 'react';
//React Router
import { Link } from 'react-router-dom';
// import { SiDeepin } from 'react-icons/si'; 
// import { MdDashboard, MdAttachMoney } from 'react-icons/md';
// import { HiBriefcase } from 'react-icons/hi';
// import { BsFillPiggyBankFill } from 'react-icons/bs'; 
// import { FaMoneyBillWave } from 'react-icons/fa'; 

const SearchNav = () =>{
    return (
      <nav style={styles.nav}>
        <Link to="/Dashboard" style={styles.padding}>Repositories</Link>
        <Link to="/Reports" style={styles.padding}>Code</Link>
        <Link to="/Income" style={styles.padding}>Commits</Link>
        <Link to="/Spending"style={styles.padding}>Issues</Link> 
        <Link to="/Savings" style={styles.padding}>Discussions</Link> 
        <Link to="/Savings" style={styles.padding}>Packages</Link> 
        <Link to="/Savings" style={styles.padding}>Marketplace</Link> 
        <Link to="/Savings" style={styles.padding}>Topics</Link> 
        <Link to="/Savings" style={styles.padding}>Wikis</Link> 
        <Link to="/Savings" style={styles.padding}>Users</Link> 
      </nav>
    );
  }
export default SearchNav

const styles = {
  nav:  {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1.5rem',
    alignItems: 'center',
    backgroundColor: '#474044',
    padding: '1rem',
    color: 'white',
  },
  padding: {
    paddingBottom: '26px',
    border: '1px solid grey',
    width: 300,
    borderRadius: 30
    // alignItems: 'center'
  }
}
