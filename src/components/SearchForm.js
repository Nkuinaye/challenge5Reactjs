import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import './Style/form.css' 

const SearchForm = ({ onSearch }) => {  // Extraction de la prop "onSearch"
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query); // Appel de la fonction onSearch avec "query"
        setQuery('');    // Réinitialisation du champ input
    };

    return (
        <>
            <Container>
                <h2 className='text-center my-4'>
                    Recipe App
                </h2>
                <div className='form-container'>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type='text' 
                            placeholder='Search Recipe...' 
                            value={query} 
                            onChange={(e) => setQuery(e.target.value)} 
                        />
                        <button type='submit'>
                            <FaSearch />
                        </button>
                    </form>
                </div>
            </Container>
        </>
    );
};




export default SearchForm