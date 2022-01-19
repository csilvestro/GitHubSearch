import React from 'react';

const SearchBtn = props => {  
  return (
      <button style={styles.button}>
        {props.searchBtn}
      </button>
  )
}
export default SearchBtn

const styles = {
  button: {
    padding: '1% 2%',
    // border: '1px solid grey',
    borderRadius: '10px',
    fontWeight: 'bold',
    backgroundColor: 'whitesmoke'
  }
}