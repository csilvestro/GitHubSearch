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
                    value={props.searchTerm}
                    onChange={e => {props.setsearchTerm(e.target.value)}}
                    placeholder="Search GitHub"
                />
                <SearchBtn searchBtn="Search " />
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