import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
// import SearchFormClone from '../components/SearchFormClone';
// import { useStateValue } from '../StateProvider';
// import useGoogleSearch from './useGoogleSearch';
// import Response from './response';
// import { NavItem } from 'react-bootstrap';

function Pulls() {
  const [term] = useState('tesla');
  // Live API Call
  // const { data } = useGoogleSearch(term);
  // const data = Response;
  // console.log(data)
  return (
      <section style={styles.container}>
        <h1>{term}</h1>
        {/* <SearchFormClone hideButtons/>
        <Link to="/">
          <img src="" alt="Google Search" />
        </Link>
        {true && (
          <div>
            <p>
              About 30000 results (0.3 seconds) for Tesla
            </p>
            <p>About {data?.searchInformation.formattedTotalResults}results({data?.searchInformation.formattedSearchTime} secons) for {term} </p>

            {data?.items.map(item => (
              <p>
                <a href={item.link}>v{item.displayLink}</a>
                <a href={item.link}>{item.title}</a>
              </p>
            ))}   
          </div>
        )}*/}
      </section>
  );
}

export default Pulls;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '99vh',
    paddingLeft: '2%'
  }
}