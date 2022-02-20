import React from 'react';
import { IoLogoGithub } from 'react-icons/io5';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer style={styles.container}>
        <div style={styles.copyright}>
          <IoLogoGithub style={styles.logo} />
          © 2022 Github, Inc. 
        </div>       
        <Link to='pulls' style={styles.link}>Terms</Link>
        <Link to='issues' style={styles.link}>Privacy</Link>
        <Link to='marketplace' style={styles.link}>Security</Link>
        <Link to='explore' style={styles.link}>Status</Link>
        <Link to='explore' style={styles.link}>Docs</Link>
        <Link to='explore' style={styles.link}>Contact GitHub</Link>
        <Link to='explore' style={styles.link}>Pricing</Link>
        <Link to='explore' style={styles.link}>API</Link>
        <Link to='explore' style={styles.link}>Training</Link>
        <Link to='explore' style={styles.link}>Blog</Link>
        <Link to='explore' style={styles.link}>About</Link>
      </footer>
    )
  };
export default Footer;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '4%',
    paddingTop: '4%',
    color: '#0b69da',
    fontSize: '0.80em',
    // borderTop: '1px solid lightgrey'
  },
  copyright: {
    display: 'flex',
    alignItems: 'center',
    color: 'darkgrey',
    paddingRight: '1%',
  },
  link: {
    color: '#0b69da',
    paddingRight: '1%',
  },
  logo: {
    fontSize: '2em',
    color: 'grey'
  }
}