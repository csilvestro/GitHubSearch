import React from 'react';
// import SearchBtn from '../components/buttons/SearchBtn';
// import { IoSearchOutline } from 'react-icons/io5';
// import Header from '../components/Header';
import SearchNav from '../components/navs/SearchNav';
import LanguagesNav from '../components/navs/LanguagesNav';

function SearchResults(){
    return (
        <div style={styles.container}>
            <section style={styles.nav}>
                <SearchNav />
                <LanguagesNav />
            </section>
            <main>
                <div style={styles.row}>
                    <h1>91,040 repository results</h1>
                    <button>Sort: Best match</button>
                </div>
                <div>
                    Search List Here
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
        backgroundColor: 'grey'
    },
    nav: {
        // width: '20%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 30,
        border: '2px solid lightgrey',

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

