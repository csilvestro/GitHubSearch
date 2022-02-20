import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import SearchList from '../components/SearchList';

function SearchLast() {
  // const [searchTerm, setsearchTerm] = useState("");
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({});
  // // let limit = 10;

  useEffect(() => {
    getUserData();
  }, [username]);
  

  var gitHubUrl = `https://api.github.com/users/${username}`;
  var gitRepos = `https://api.github.com/users/${username}/repos`;

  const getUserData = async () => {
    const response = await fetch(gitHubUrl);
    const jsonData = await response.json();
    if (jsonData && jsonData.message !== "Not Found") {
        setUserData(jsonData);
        console.log(jsonData)
    }
    else if (username !== "") {
        console.log('Username does not exist');
    }
    else {
        setUserData({})
    }
  };

  return (
    <section style={styles.container}>
      <p>This search is for single user</p>
      <SearchForm 
        // addSearch={addSearch}
        // searchTerm={searchTerm} 
        // setsearchTerm={setsearchTerm} 
        // searchSubmit={searchSubmit} 
        // searchBtn={loading ? "Loading..." : "Search"} 
        username={username} 
        setUsername={setUsername}
      /> 
      <div style={styles.lowerCont}>
        <SearchList userData={userData} />
      </div>

      <div>
        <Link to="/SearchResults" style={styles.padding}>Search Results</Link>
        <Link to="/SearchNew" style={styles.padding}>Search New</Link>
        <Link to="/SearchPag" style={styles.padding}>Pagination</Link>
      </div>
    </section>
  );
}
export default SearchLast;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    cursor: 'pointer',
    paddingLeft: '15%',
    paddingTop: '2%'
  },
  left: {
    border: '1px solid grey',
    borderRadius: '10px',
    width: '25%',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    width: '600px',
    marginLeft: '5%'

  },
  p: {
    textAlign: 'center'
  },
  ltNav: {
    borderBottom: '1px solid grey',
    alignItems: 'center',
    padding: '3%',
  },
  repoList: {
    height: '300px',
    overflow: 'scroll'
  },
  paginate: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '4%',
  }
}
