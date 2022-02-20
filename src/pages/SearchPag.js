import React, { useState, useEffect} from 'react';
import './SearchPag.css';
// import SearchList from '../components/SearchList';
import SearchNav from '../components/navs/SearchNav';
import LanguagesNav from '../components/navs/LanguagesNav';
import ReactPaginate from 'react-paginate';

const PER_PAGE = 10;

function SearchPag(){
    const [currentPage, setcurrentPage] = useState(0);
    const [data, setData] = useState([]);
    
    
    useEffect(() => {
        async function fetchAPI(){
            // const response = await fetch('https://randomuser.me/api/');
            // const response = await fetch('https://jsonplaceholder.typicode.com/photos');
            // const data = await response.json();
            // const [newData] = data;
            // fetch("https://randomuser.me/api/")
            await fetch("https://jsonplaceholder.typicode.com/photos")
            // await fetch(`https://api.github.com/users/${user.name}`)
            // await fetch("https://api.github.com/users/defunkt")
            .then((res) => res.json())
            .then((data) => {
                // setData(data.results);
                setData(data);
            })
            // console.log(newData)
            // setData(newData);
        }
        fetchAPI();
    }, []);
    
    function handlePageClick({ selected: selectedPage }) {
        console.log("selectedPage, selectedPage");
        setcurrentPage(selectedPage);
    }
    // 0, 10, 20, 30...
    const offset = currentPage * PER_PAGE;
    console.log("offset", offset);

    const currentPageData = data
        .slice(offset, offset + PER_PAGE)
        .map(( res, index ) => <div key={index}>{res.title}<p>{res.body}</p><img key={index} src={res.thumbnailUrl} alt="This is cool" /></div>);
        // .map(( res, index ) => <img key={index} src={res.picture.thumbnail} alt="This is cool" />);
        console.log('CurrentPageData', currentPageData);

    const pageCount = Math.ceil(data.length / PER_PAGE);

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
                    {currentPageData}
                </div>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"next"}
                    // breakLabel={"..."}
                    pageCount={pageCount}
                    // marginPagesDisplayed={2}
                    // pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    // pageClassName={"pagination__link"}
                    // pageLinkClassName={"pagination__link"}
                    // previousClassName={"pagination__link"}
                    previousLinkClassName={"pagination__link"}
                    // nextClassName={"page-item"}
                    nextLinkClassName={"pagination__link"}
                    // breakClassName={pagination__link"}
                    // breakLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}
                />
            </main>
        </div>
    );
}

export default SearchPag;

const styles= {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    nav: {
        // width: '20%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 30,
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
    },
    // pagination: {
    //     display: 'flex',
    //     justifyContent: 'flex-start',
    //     listStyle: 'none',
    //     cursor: 'pointer'
    // },
    // paginationa: {
    //     padding: '10px',
    //     border: '1px solid blue',
    //     color: 'blue'
    // },
    // paginationLink: {

    // }
}

