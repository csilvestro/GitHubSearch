import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import SearchForm from '../components/SearchForm';
// import SearchList from '../components/SearchList';
// import SearchListo from '../components/SearchListo';
// import Scroll from '../components/Scroll';
// import SearchResults from '../pages/SearchResults';
// import ReactPaginate from 'react-paginate';
//React Router
// import { Link } from 'react-router-dom';
function SearchNew() {
  const [data, setdata] = useState([]);
  const [username, setUsername] = useState("");
  // const [allData,setAllData] = useState([]);
  // const [filteredData,setFilteredData] = useState(allData);


  useEffect(() => {
    async function fetchAPI(){
      // const response = 
      // await fetch('https://api.github.com/users/')
      await fetch('https://api.github.com/users/${username}')
      // https://api.github.com/users/${username}/repos
      .then((res) => res.json())
      .then((data) => {
          console.log(data)
          setdata(data);
      })
    }
    fetchAPI();
  }, []);

  

  // const handleSearch = (event) => {
  //   let value = event.target.value.toLowerCase();
  //   let result = [];
  //   console.log(value);
  //   result = allData.filter((data) => {
  //   return data.title.search(value) !== -1;
  //   });
  //   setFilteredData(result);
  // }

  return (
    <section style={styles.container}>
      {/* <SearchForm 
        addSearch={addSearch}
        // searchTerm={searchTerm} 
        // setsearchTerm={setsearchTerm} 
        // searchSubmit={searchSubmit} 
        // searchBtn={loading ? "Loading..." : "Search"} 
      />  */}
      {/* <div style={styles.lowerCont}>
      <div style={{ margin: '0 auto', marginTop: '10%' }}>
        <label>Search:</label>
        <input type="text" onChange={(event) =>handleSearch(event)} />
      </div>
      <div>
        {filteredData.map((value,index)=>{
          return(
            <div key={value.id}>
              {value.title}
            </div>
          )
        })}
      </div> */}

        {/* <div style={styles.right}>    
          {searchTerm && <SearchList
              avatar={searchTerm.picture.large} 
              fname={searchTerm.name.first}
              lname={searchTerm.name.last}
              street={searchTerm.location.street.number}
              city={searchTerm.location.city}
              state={searchTerm.location.state}
              zipcode={searchTerm.location.postcode}
              email={searchTerm.email}
              phone={searchTerm.phone}
          />}
        </div> */}
      <div>
      {/* https://api.github.com/users/${username} */}
      </div>
    </section>
  );
}

export default SearchNew;

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
