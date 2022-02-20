import React, { useState } from 'react';
import SearchBtn from './buttons/SearchBtn';
import { IoSearchOutline } from 'react-icons/io5';

function SearchForm ({ username, setUsername }){

    const [value, setValue] = useState("");

    const validateForm = e => {
        e.preventDefault();
        if(!value) return;
        setUsername(value);
        setValue("");
    }; 

    return (
        <form onSubmit={validateForm} style={styles.searchForm}>
            <p style={styles.title}><IoSearchOutline /> Search more than <strong>85M</strong> users</p>
            <div style={styles.inputBx}>
                <input
                    type="text"
                    style={styles.input}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    // onKeyUp={e => setValue(e.target.value)}
                    // onPaste={e => setValue(e.target.value)}
                    placeholder="Search GitHub"
                />
                <SearchBtn searchBtn="Search " />
            </div>
            <p style={styles.subTitle}><strong>ProTip! </strong>For an advanced search, use some of our prefixes.</p>
        </form>
    );
}
    
export default SearchForm;

const styles= {
    searchForm: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        paddingTop:'10%',
        paddingBottom: '5%',
        borderBottom: '0.75px solid lightgrey'
    },
    title: {
        fontSize: '1.5em'
    },
    subTitle: {
        fontSize: '0.85em'
    },
    inputBx: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: '2%'
    },
    input: {
        width: '850px',
        paddingLeft: '2%',
        marginRight: '1%',
        border: '1px solid lightgrey',
        borderRadius: '5px',
        fontSize: '0.9em'
    }
}







// function IncomeForm({ addIncome }) {
//     const [value, setValue] = useState("");

//     const valdateForm = e => {
//         e.preventDefault();
//         if (!value) return;
//         addIncome(value);
//         setValue("");
//     };

//     return (
//         <form onSubmit={valdateForm} style={styles.IncomeForm}>
//             <p>Add Income:</p>
//             <input
//                 type="text"
//                 style={styles.input}
//                 value={value}
//                 onChange={e => setValue(e.target.value)}
//             />
//             <MyBtn myBtn="Add Income"/>
//         </form>
//     );
// }

// export default IncomeForm