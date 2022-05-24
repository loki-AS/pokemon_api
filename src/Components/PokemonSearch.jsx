import React, { useState } from 'react'
import Searchbar from './Searchbar'
import {fetchPokemon} from './getPokemon'
import PokemonData from './PokemonData'

function PokemonSearch() {

    const[pokemon, setPokemon] = useState('')

    const[loading, setLoading] = useState(false)

    const getPokemon = async(query) =>{
        setLoading(true)
        const response = await fetchPokemon(query)
        const result = await response.json()
        setPokemon(result)
        setLoading(false)
        console.log(result)
    }

  return (
    <div>
        <Searchbar getPokemon={getPokemon}/>
        {!loading && pokemon ? (
            <PokemonData 
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.other.dream_world.front_default}
                type={pokemon.types[0].type.name}
            />
        ):null}
    </div>
  )
}

export default PokemonSearch