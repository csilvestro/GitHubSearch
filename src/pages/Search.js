import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SearchForm from '../components/SearchForm';
import SearchList from '../components/SearchList';
import ReactPaginate from 'react-paginate';
//Helped get the url for github repo links.
//Lets Build a React Project W/ The GitHub API
// https://www.youtube.com/watch?v=QSzTx2y-Wys
// Pagination
// Simple and light weight react pagination
// isaurssaurav.github.io/react-paginatio
// Github API Documentation
// https://www.npmjs.com/package/react-pagination-js

function Search() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [searchResults, setsearchResults] = useState([]);
  const [searchResultsloading, setsearchResultsloading] = useState(false);
  const [currentPage, setcurrentPage] = useState(0);
  const [pageCount, setpageCount] = useState(0);
  const [totalCount, settotalCount] = useState([]);
  let limit = 10;

  useEffect(() => {
    setRepos([]);
    setsearchResults({});
  },[username]);

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
      // axios({
      //   method: 'get',
      //   url: `https://api.github.com/user/repos?${currentPage}&per_page=5`
      // }).then(resp => {
      //   setpageCount(resp.data)
      // });

      //total_count is the key name. I could not figure out the url. 
      //   const getUsers = async () => {
      //   url: `https://api.github.com/search/code?q=addClass+user:mozilla&per_page=5`,
      //   const response = await axios.get(`https://api.github.com/user/repos?${currentPage}&per_page=5`);
      //   const data = await response.json();
      //   const total = response.headers.get('x-total-count');
      //   setpageCount(Math.ceil(total/12));
      //   console.log(Math.ceil(total/12));
      //   setUsername(data);
      // } 
  }

  //Display Search List
  function renderRepo(repo){
    return(
        <li key={repo.id} onClick={() => getResults(repo.name)} style={styles.ltNav}>
          {repo.name}
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

  // Pagination 
  const changeCurrentPage = numPage => {
    setcurrentPage({ currentPage: numPage });
    searchRepos();
    let currentPage = numPage.selected + 1;
    const pagesFromApi = searchRepos(currentPage);
    setRepos(pagesFromApi);
  };
  useEffect(() => {
    async function fetchTotalCount(){
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc&page=1&per_page=10`
      );
      const data = await response.json();
      const [totalcount] = data.total_count
      console.log(totalcount);
      settotalCount(totalcount)
    }
    fetchTotalCount();
  }, []);


  const baseUrl: string = 'https://api.worldbank.org/v2/country/'

const getIndicatorByCountry = async (country: string, indicator: string, page:number=1): Promise<[]> => {  
  const query = `${baseUrl}/${country}/indicator/${indicator}?page=${page}&format=json`
  const response = await axios.get(query)  
  const data = response.data

  if (data[0].pages > page) {
    return data.concat(await getIndicatorByCountry(country, indicator, page+1)) 
  } else {
    return data
  }
}

  return (
    <section style={styles.container}>
      <SearchForm 
        username={username} 
        setUsername={setUsername} 
        submitSearch={submitSearch} 
        searchBtn={loading ? "Loading..." : "Search"} 
      /> 
      <div style={styles.lowerCont}>
        <div style={styles.left}>
          <p style={styles.p}>{totalCount} repostory results</p> 
          <ul style={styles.repoList}>
            {repos.map(renderRepo)}
          </ul>
          <div style={styles.paginate}>
            {repos.length > 0 ? (
              <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={changeCurrentPage}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
              />
              ) : (
                <span>No User Repos to display</span>
              )}
          </div>
        </div>
        <div style={styles.right}>
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
