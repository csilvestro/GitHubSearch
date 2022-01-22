import React from 'react';
import { BiPlus } from 'react-icons/bi';
import { IoNotificationsOutline } from 'react-icons/io5';
import Avatar from '../images/avatar.jpg';
import Logo from '../images/GitHubLogo.png';
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <header style={styles.container}>
        <div style={styles.leftSide}>
          <Link to='search'><img src={Logo} alt="Github User Search" style={styles.logo} /></Link>
          <Link to='pulls'>Pulls</Link>
          <Link to='issues'>Issues</Link>
          <Link to='marketplace'>MarketPlace</Link>
          <Link to='explore'>Explore</Link>
        </div>
        
        <div style={styles.rightSide}>
          <Link to='notifications'><IoNotificationsOutline /></Link>
          <Link to='new'><BiPlus /></Link>
          <Link to='profile'><img src={Avatar} alt="Avatar" style={styles.avatar} /></Link>
        </div>
      </header>
    )
  };
export default Header;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '1%',
    flex: 1,
    backgroundColor: '#24292f'
  },
  logo: {
    width: '40px'
  },
  leftSide: {
    width: '400px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bolder'
  },
  rightSide: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '1.25em',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100px',
  },
  avatar: {
    height: '30px',
    width: '30px',
    borderRadius: '50%',
  }
}