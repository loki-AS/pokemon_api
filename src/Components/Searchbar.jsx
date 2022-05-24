import React, { useState } from 'react'
import { Button, Col, Container, Form, Row, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Searchbar(props) {

    const [search, setSearch] = useState('');


  return (
    <div className="pokemon-container">
    <input 
    className="form-control my-box"
      onChange={(e) => setSearch(e.target.value)}
      type="text" 
      placeholder="Search Pokemon"
    />
    <button className="btn btn-primary my-btn load-more" onClick={(e) => props.getPokemon(search)}>Search</button>
    </div>
  )
}

export default Searchbar