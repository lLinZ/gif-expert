import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('')
    
    const handleInputChange =   (e)     =>  {
        setInputValue(e.target.value);
    }

    const handleSubmit  =   (e) =>  {
            e.preventDefault();
            setCategories(categorias => [ inputValue,...categorias] )
            setInputValue('');
    }
    return (
        <>
            <h2>Add Category</h2>
            <input 
                type        =   "text" 
                value       =   {   inputValue  }
                onChange    =   {   handleInputChange   }
            />
            <button onClick={handleSubmit}>Agregar</button>
        </>
    )
}
AddCategory.propTypes = {
    setCategories   :   PropTypes.func.isRequired,
}