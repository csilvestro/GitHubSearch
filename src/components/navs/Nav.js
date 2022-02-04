import React from 'react';
//React Router
import { Link } from 'react-router-dom';
import { SiDeepin } from 'react-icons/si'; 
import { MdDashboard, MdAttachMoney } from 'react-icons/md';
import { HiBriefcase } from 'react-icons/hi';
import { BsFillPiggyBankFill } from 'react-icons/bs'; 
import { FaMoneyBillWave } from 'react-icons/fa'; 

const Nav = () =>{
    return (
      <nav style={styles.nav}>
        <p style={styles.padding}><SiDeepin /></p>
        <Link to="/Dashboard" style={styles.padding}><MdDashboard /></Link>
        <Link to="/Reports" style={styles.padding}><HiBriefcase /></Link>
        <Link to="/Income" style={styles.padding}><MdAttachMoney /></Link>
        <Link to="/Spending"style={styles.padding}><FaMoneyBillWave /></Link> 
        <Link to="/Savings" style={styles.padding}><BsFillPiggyBankFill /></Link> 
      </nav>
    );
  }
export default Nav

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
