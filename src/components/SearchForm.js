import React from 'react';
import SearchBtn from './buttons/SearchBtn';
import { IoSearchOutline } from 'react-icons/io5';

const SearchForm = props => {
    return (
        <form onSubmit={props.submitSearch} style={styles.searchForm}>
            <p style={styles.title}><IoSearchOutline /> Search more than 83M users</p>
            <div style={styles.inputBx}>
                <input
                    type="text"
                    style={styles.input}
                    value={props.username}
                    onChange={e => {props.setUsername(e.target.value)}}
                    placeholder="Search GitHub"
                />
                <SearchBtn {...props} />
            </div>
            <p>ProTip! For an advanced search, use some of our prefixes.</p>
        </form>
    );
}
    
export default SearchForm;

const styles= {
    searchForm: {
        display: 'flex',
        flexDirection: 'column',
<<<<<<< HEAD
        width: '50%'
=======
        width: '70%',
        paddingTop:'5%',
        paddingBottom: '5%',
        borderBottom: '1px solid grey'
>>>>>>> 4ffdf3680092bdaf8ce6ec50c5c3c754470e1d1b
    },
    title: {
        fontSize: '1.5em'
    },
    inputBx: {
        display: 'flex',
<<<<<<< HEAD
        flexDirection: 'row'
    },
    input: {
        width: '450px',
        padding: '1%',
        marginRight: '1%',
        border: '2px solid grey'
=======
        flexDirection: 'row',
        paddingBottom: '2%'
    },
    input: {
        width: '800px',
        padding: '0.5%',
        marginRight: '1%',
        border: '2px solid lightgrey',
        borderRadius: '10px'
>>>>>>> 4ffdf3680092bdaf8ce6ec50c5c3c754470e1d1b
    }
}