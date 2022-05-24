import {useEffect, useState} from 'react'
import PokemonSearch from './Components/PokemonSearch'
import PokemonThumbnail from './Components/PokemonThumbnail'

function App() {

  const [allPokemon, setAllPokemon] = useState([])

  const[loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemon = async() => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemon(results) {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()

        setAllPokemon( currentList => [...currentList, data])
        // await allPokemon.sort((a, b) => a.id - b.id)
        console.log(allPokemon)
      })
    }
    createPokemon(data.results)
  }

  useEffect(() => {
    getAllPokemon()
  }, [])

  return (
    <div className="app-container">
    <h1>Pokemon</h1>
    <PokemonSearch />
    <div className="pokemon-container">
      <div className="all-container">
      {allPokemon.map( (pokemon, index) => 
            <PokemonThumbnail
              key={index}
              id={pokemon.id}
              image={pokemon.sprites.other.dream_world.front_default}
              name={pokemon.name}
              type={pokemon.types[0].type.name}
            />)}
      </div>
      <button className="load-more btn btn-primary" onClick={() => getAllPokemon()}>Load More</button>
    </div>
    </div>
  )
}

export default App
