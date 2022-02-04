import React from 'react';
// import { BiBookBookmark, BiHelpCircle } from 'react-icons/bi';
// import { AiOutlineStar } from 'react-icons/ai';
// import { BsFillCalendarCheckFill, BsChatSquareDots } from 'react-icons/bs';

const SearchList = ( props ) => {  
    // if (loading) {
    //     return(<p>Loading...</p>)
    // }
    return (
        <article style={styles.list}>
            {props.fname}fname
            <div>{props.lname}lname</div>
            {/* <input type='text' style={styles.myInput} value={props.fName} placeholder='First Name' /> */}
            {/* <h1>{searchResults.login.username}user</h1> */}
            {/* <h4><a href={searchResults.html_url}><BiBookBookmark /> {searchResults.full_name}</a></h4>
            <p>{searchResults.description}</p>          
            <p style={styles.p}>                
                <span style={styles.p}><AiOutlineStar /> {searchResults.stargazers_count}</span>
                <span style={styles.p}><BsChatSquareDots /> {searchResults.language}</span>
                <span style={styles.p}><BsFillCalendarCheckFill /> {new Date(searchResults.pushed_at).toLocaleDateString()}</span>
                <span style={styles.p}><BiHelpCircle /> {searchResults.open_issues_count} need help</span>
            </p> */}
        </article>
    )
}
export default SearchList

const styles= {
    list: {
        padding: '2%',
        marginTop: '0.5%', 
        borderBottom: '1px solid grey',
        cursor: 'pointer',
        fontSize: '0.9em'
    },
    p: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icons: {
        paddingRight: '25px'
    }
}
