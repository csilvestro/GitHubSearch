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
        width: '50%'
    },
    title: {
        fontSize: '1.5em'
    },
    inputBx: {
        display: 'flex',
        flexDirection: 'row'
    },
    input: {
        width: '450px',
        padding: '1%',
        marginRight: '1%',
        border: '2px solid grey'
    }
}