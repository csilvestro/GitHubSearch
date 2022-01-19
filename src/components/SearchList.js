import React from 'react';
import { BiBookBookmark, BiHelpCircle } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai';
import { BsFillCalendarCheckFill, BsChatSquareDots } from 'react-icons/bs';

function SearchList({searchResults, loading}){  
    if (loading) {
        return(<h1>Loading...</h1>)
    }
    return (
        <article key={searchResults.id} style={styles.list} >
            <h1><BiBookBookmark /><a href={searchResults.html_url}>{searchResults.full_name}</a></h1>
            <p>{searchResults.description}</p>          
            <p style={styles.p}>                
                <span style={styles.p}><AiOutlineStar /> {searchResults.stargazers_count}</span>
                <span style={styles.p}><BsChatSquareDots /> {searchResults.language}</span>
                <span style={styles.p}><BsFillCalendarCheckFill /> {new Date(searchResults.pushed_at).toLocaleDateString()}</span>
                <span style={styles.p}><BiHelpCircle /> {searchResults.open_issues_count} need help</span>
            </p>
        </article>
    )
}
export default SearchList

const styles= {
    list: {
        paddingLeft: '20%',
        paddingRight: '20%',
        marginTop: '0.5%', 
        marginLeft: '30%',
        backgroundColor:  'whitesmoke',
        border: '1px solid grey',
        borderRadius: '25px',
        cursor: 'pointer',
        width: '400px'
    },
    p: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    icons: {
        paddingRight: '25px'
    }
}
