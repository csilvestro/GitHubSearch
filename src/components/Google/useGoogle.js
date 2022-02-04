// import React, {useState, useEffect} from 'react';
// import API_KEY from '../keys';


// import API_KEY = "";

// const CONTEXT_KEY = "AIzaSyAtomZT09GUu3an6n8pNYzdNlTaMHr5hM0";

// const useGoogleSearch = (term) => {
//     const [data, setData] = useState(null);

//     useEffect(()=> {
//         const fetchData = async () => {
//             fetch( 
//                 `https://www.googleapis.com/customsearch/v1?keys=${API_KEY}&cx=${CONTEXT_KEY}&q${term}`
//             )
//             .then(response => response.json())
//             .then(result => {
//                 setData(result)
//             })
//         }
//         fetchData();    
//     }, [term])
//     return { data }
// };

// export default useGoogleSearch;