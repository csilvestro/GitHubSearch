import React from 'react';
//React Router
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './pages/Search';
import Pulls from './pages/Pulls';
import Issues from './pages/Issues';
import Marketplace from './pages/Marketplace'; 
import Explore from './pages/Explore';
import Notifications from './pages/Notifications';

function App() {
  return (
      <div style={styles.container}>
        <Header />
        <section> 
          <Routes>
            <Route exact path='/' element={<Search />} /> 
            <Route path='/Search' element={<Search />} />
            <Route path='/Pulls' element={<Pulls />} />
            <Route path='/Issues' element={<Issues />} />
            <Route path='/Marketplace' element={<Marketplace />} />
            <Route path='/Explore' element={<Explore />} />
            <Route path='/Notifications' element={<Notifications />} />
          </Routes>
        </section>
        <Footer />
      </div>
    );
  }
export default App;

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  }
}
