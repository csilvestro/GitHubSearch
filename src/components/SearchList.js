import React from 'react';
import { BiBookBookmark, BiHelpCircle } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai';
import { BsFillCalendarCheckFill, BsChatSquareDots } from 'react-icons/bs';

const SearchList = ({userData}) => {  
    // if (loading) {
    //     return(<p>Loading...</p>)
    // }
    return (
        <article style={styles.list} key={userData.id}>
            {userData.avatar_url ? (<div className="dataitem"><img src={userData.avatar_url} alt="avatar" /></div>) : (<div></div>)}
            {userData.login ? (<div className="dataitem">Login: {userData.login}</div>) : (<div></div>)}
            {userData.name ? (<div className="dataitem">Name : {userData.name}</div>) : (<div></div>)}
            {userData.blog ? (<div className="dataitem">Blog: {userData.blog}</div>) : (<div></div>)}
            {userData.company ? (<h1>Company: {userData.company}</h1>) : (<div></div>)}
            {userData.repos_url ? (<h4><a href={userData.repos_url}><BiBookBookmark /> {userData.type}</a></h4>) : (<div></div>)}
            {userData.url ? (<p>{userData.url}</p> ) : (<div></div>)}

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
