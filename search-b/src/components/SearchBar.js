import React, {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import './SearchBar.css';

export const SearchBar = () => {
    const [input, setInput] = useState('');

    const fetchData = (value) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
    }

    const handleChange = (value) =>{
        setInput(value);
        fetchData(value);
    }


    return (
    <div className='input-wrapper'>
        <FaSearch id='search-icon'/>
        <input type='text' placeholder='Type to search. . . ' value={input} onChange={e => handleChange(e.target.value)}/>
    </div>
    )
}