import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputValue=(e)=>{
    setInputValue(e.target.value)
  }

  const handleSubmit = (e)=>{

    e.preventDefault();

    if(inputValue.trim().length >= 1){

      setCategories(cats => [inputValue, ...cats ]);
      setInputValue('');

    }
    
  }
  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            value={inputValue}
            onChange={handleInputValue}
            placeholder='Busca tu gif'
            
        />
        <hr/>
    </form>
  )
}

AddCategory.prototype = {
  setCategories: PropTypes.func.isRequired
}