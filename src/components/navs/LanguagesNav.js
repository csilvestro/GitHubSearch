import React from 'react';
//React Router
import { Link } from 'react-router-dom';
// import { SiDeepin } from 'react-icons/si'; 
// import { MdDashboard, MdAttachMoney } from 'react-icons/md';
// import { HiBriefcase } from 'react-icons/hi';
// import { BsFillPiggyBankFill } from 'react-icons/bs'; 
// import { FaMoneyBillWave } from 'react-icons/fa'; 

const LanguagesNav = () =>{
    return (
      <nav style={styles.nav}>
        <Link to="/Dashboard" style={styles.padding}>HTML</Link>
        <Link to="/Reports" style={styles.padding}>JavaScript</Link>
        <Link to="/Income" style={styles.padding}>Jupyter Notebook</Link>
        <Link to="/Spending"style={styles.padding}>Python</Link> 
        <Link to="/Savings" style={styles.padding}>Java</Link> 
        <Link to="/Savings" style={styles.padding}>CSS</Link> 
        <Link to="/Savings" style={styles.padding}>C#</Link> 
        <Link to="/Savings" style={styles.padding}>Ruby</Link> 
        <Link to="/Savings" style={styles.padding}>TypeScript</Link> 
        <Link to="/Savings" style={styles.padding}>Swift</Link> 
      </nav>
    );
  }
export default LanguagesNav;

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
    paddingBottom: '26px'
  }
}
