import React, { useState, useEffect} from 'react';
// import SearchBtn from '../components/buttons/SearchBtn';
// import { IoSearchOutline } from 'react-icons/io5';
// import Header from '../components/Header';
import SearchList from '../components/SearchList';
import SearchNav from '../components/navs/SearchNav';
import LanguagesNav from '../components/navs/LanguagesNav';

function SearchResults(){
    const [searchTerm, setsearchTerm] = useState(null);

    useEffect(() => {
        async function fetchAPI(){
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            const [user] = data.results;
            console.log(user)
            setsearchTerm(user);
        }
        fetchAPI();
    }, []);
    return (
        <div style={styles.container}>
            <section style={styles.nav}>
                <SearchNav />
                <LanguagesNav />
                <p>Advanced search  Cheat sheet</p>
            </section>
            <main>
                <div style={styles.row}>
                    <h1>91,040 repository results</h1>
                    <button>Sort: Best match</button>
                </div>
                <div>
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
                </div>
                <div>
                    Pagination here
                </div>
            </main>
        </div>
    );
}

export default SearchResults;

const styles= {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        // width: '70%',
        // paddingTop:'5%',
        // paddingBottom: '5%',
        // backgroundColor: 'grey'
    },
    nav: {
        // width: '20%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 30,
        // padding: 30
        // border: '2px solid lightgrey',

    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: '1.5em'
    },
}

