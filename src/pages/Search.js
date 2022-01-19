import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SearchForm from '../components/SearchForm';
import SearchList from '../components/SearchList';
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css"; // import css
//Helped get the url for github repo links.
//Lets Build a React Project W/ The GitHub API
// https://www.youtube.com/watch?v=QSzTx2y-Wys
// Pagination
// Simple and light weight react pagination
// isaurssaurav.github.io/react-paginatio
// Github API Documentation

function Search() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [searchResults, setsearchResults] = useState([]);
  const [searchResultsloading, setsearchResultsloading] = useState(false);
  const [currentPage] = useState(1);

  useEffect(() => {
    setRepos([]);
    setsearchResults({});
  }, [username]);

  // Get Input
  // const changeInput = (e) => {
  //   setUsername(e.target.value);
  //   console.log(username)
  // }

  // Search Button
  function submitSearch(e){
    console.log("Stop clicking me");
    console.log(username);
    e.preventDefault();
    searchRepos();
  }

  // Get Users Repos
  function searchRepos(){
    setLoading(true);
    axios({
        method: 'get',
        url: `https://api.github.com/users/${username}/repos`,
      }).then(resp => {
        setLoading(false);
        setRepos(resp.data)
      });
  }

  //Display Search List
  function renderRepo(repo){
    return(
        <li key={repo.id} onClick={() => getResults(repo.name)}>
          <h1>{repo.name}</h1>
        </li>
    )
  }

  //Display repo details
  function getResults(repoName){
    setsearchResultsloading(true);
      axios({
        method: 'get',
        url: `https://api.github.com/repos/${username}/${repoName}`,
      }).then(resp => {
        setsearchResultsloading(false);
        setsearchResults(resp.data)
      });
      console.log(searchResults)  
  };
  
  //Pagination
  const changeCurrentPage = numPage => {
    this.setState({ currentPage: numPage });
    //fetch a data
  };

  return (
    <section style={styles.container}>
      <SearchForm 
          username={username} 
          setUsername={setUsername} 
          submitSearch={submitSearch} 
          searchBtn={loading ? "Loading..." : "Search"} 
      /> 
      <p>
        {repos.length > 0 ? (
          <Pagination
            currentPage={currentPage}
            totalPages={10}
            changeCurrentPage={changeCurrentPage}
            theme='bootstrap'
          />
        ) : (
          <h1>No User Repos to display</h1>
        )}
      </p>
      <div style={styles.lowerCont}>
        <div style={styles.left}>
          <h1 style={styles.h1}>2867 repostory results</h1> 
          <ul>
            {repos.map(renderRepo)}
          </ul>
        </div>
        <div>
          <SearchList 
            searchResults={searchResults} 
            repos={repos}
            loading={searchResultsloading} 
          />
        </div>
      </div>
    </section>
  );
}

export default Search;

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
    paddingLeft: '15%'
  },
  left: {
    border: '1px solid grey',
    backgroundColor: 'whitesmoke',
    borderRadius: '25px',
    width: '25%',
  },
  h1: {
    textAlign: 'center'
  }
}