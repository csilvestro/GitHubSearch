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
    padding: '0.5% 3%',
    border: '1px solid lightgrey',
    borderRadius: '5px',
    fontSize: '0.85em',
    fontWeight: 'bold',
    backgroundColor: 'ghostwhite'
  }
}