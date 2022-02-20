import React, { useState, useEffect} from 'react';
// import SearchBtn from '../components/buttons/SearchBtn';
// import { IoSearchOutline } from 'react-icons/io5';
// import Header from '../components/Header';
import SearchList from '../components/SearchList';
import SearchNav from '../components/navs/SearchNav';
import LanguagesNav from '../components/navs/LanguagesNav';
// import { VscTriangleDown } from 'react-icons/vsc';

// function searchAList(search) {
//     return function (searchMe){
//         return searchMe.gName.toLowerCase().includes(search.toLowerCase()) || !search
//     }  
// }

function SearchResults(){
    const [searchTerm, setsearchTerm] = useState('');
    // const [filteredResults, setFilteredResults] = useState([]);
    // const [searchResults, setSearchResults] = useState('');

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

    // async function showAvatar() {

    //     // read our JSON
    //     let response = await fetch('/article/promise-chaining/user.json');
    //     let user = await response.json();

    //     // read github user
    //     let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    //     let githubUser = await githubResponse.json();

    //     // show the avatar
    //     let img = document.createElement('img');
    //     img.src = githubUser.avatar_url;
    //     img.className = "promise-avatar-example";
    //     document.body.append(img);

    //     // wait 3 seconds
    //     await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    //     img.remove();

    //     return githubUser;
    // }
    // showAvatar();



    // function SearchList({filteredPersons}){
    //     const filtered = filteredPersons.map(person => <div key={person.id} person={person}></div>);
    //     return (
    //         <div>
    //             {filtered}
    //         </div>
    //     )
    // }
    // const searchItems = (searchValue) => {
    //     setSearchInput(searchValue)
    //     if (searchInput !== '') {
    //         const filteredData = searchTerm.filter((item) => {
    //             return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
    //         })
    //         setFilteredResults(filteredData)
    //     }
    //     else{
    //         setFilteredResults(searchTerm)
    //     }
    // }

    return (
        <div style={styles.container}>
            <section style={styles.nav}>
                <SearchNav />
                <LanguagesNav />
                <p>Advanced search  Cheat sheet</p>
            </section>
            <main>
                <div style={styles.row}>
                    <p>91,040 repository results</p>
                    {/* <button style={styles.sortBtn} onClick={this.showAvatar}>Sort: Best match <VscTriangleDown /></button> */}
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
                {/* {searchTerm.map((searchTerm, id) => (
                    <SearchList
                        key={id}
                        id={id}
                        searchTerm={searchTerm}
                        // removeIncome={removeIncome}
                    />
                ))}  
                */}
                </div> 
                
                <div>
                    {/* {searchTerm.filter(li => li.toLowerCase().includes(searchTerm.toLowerCase())).map((item, key) => (
                <li key={key}>
                  {item}{' '}
                  
                </li>
                    ))} */}
                </div>

                {/* <div> */}
            
                {/* {searchTerm.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                            <div>
                                <p>{item.name}</p>
                                    <p>
                                        {item.email}
                                    </p>
                            </div>
                        )
                    })
                ) : (
                    searchTerm.map((item) => {
                        return (
                            <div>
                                <p>{item.name}</p>
                                <p>{item.email}</p>
                                        
                            </div>
                        )
                    })
                )} */}
                {/* </div> */}
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
        // width: '100%',
        // marginLeft: 'auto'
    },
    title: {
        fontSize: '1.5em'
    },
    sortBtn: {
        fontSize: '1em'
    }
}

