import React, {useState, useEffect} from 'react';
import SearchBtn from './buttons/SearchBtn';
import { IoSearchOutline } from 'react-icons/io5';
// import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function SearchFormClone({hideButtons = false}){
    const [{}, dispatch] = useStateValue();
    const [input, setinput] = useState([]);
    // let history = useHistory();

    const search = e => {
        e.preventDefault();
        console.log("Search me Buoy, ", input)
        
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        // history.push('/pulls')
    };
    

    return (
        <form onSubmit={search} style={styles.searchForm}>
            <p style={styles.title}><IoSearchOutline /> Search more than 83M users</p>
            {/* <div style={styles.inputBx}>
                <input
                    type="text"
                    style={styles.input}
                    // value={input}
                    // onChange={e => {props.setinput(e.target.value)}}
                    placeholder="Search GitHub"
                />
                {/* <SearchBtn {...props} />
            </div> 
            */}
            <p>ProTip! For an advanced search, use some of our prefixes.</p>
            <p><input value={input} onChange={e => setinput(e.target.value)} onClick={search} /></p>
            {/* <button type="submit">Search</button> */}
        

        {!hideButtons ? (
            <div>
                <button type="submit" onClick={search}>Google Search </button>
                <button>feeling lucky</button>
            </div>
        ) : (
            <div>
                <button type="submit" onClick={search} style={styles.search_buttonsHiddens}>google</button>
                <button>feeling lucky</button>
            </div>
        )}
        </form>
    );
}
    
export default SearchFormClone;

const styles= {
    searchForm: {
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
        paddingTop:'5%',
        paddingBottom: '5%',
        borderBottom: '1px solid grey'
    },
    title: {
        fontSize: '1.5em'
    },
    inputBx: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: '2%'
    },
    input: {
        width: '800px',
        padding: '0.5%',
        marginRight: '1%',
        border: '2px solid lightgrey',
        borderRadius: '10px'
    },
    search_buttonsHidden: {
        display:'none !important',
    }
}