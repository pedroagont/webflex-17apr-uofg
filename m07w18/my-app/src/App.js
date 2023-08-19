import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CharactersList from './components/CharactersList';

function App() {
  const [pokemonCharacters, setPokemonCharacters] = useState([]);
  const [starwarsCharacters, setStarwarsCharacters] = useState([]);
  const [rickmortyCharacters, setRickmortyCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      Promise.all([
        axios.get('https://pokeapi.co/api/v2/pokemon'),
        axios.get('https://swapi.dev/api/people'),
        axios.get('https://rickandmortyapi.com/api/character'),
      ]).then(([pokemon, starwars, rickmorty]) => {
        // const [pokemon, starwars, rickmorty] = res;
        setPokemonCharacters(pokemon.data.results);
        setStarwarsCharacters(starwars.data.results);
        setRickmortyCharacters(rickmorty.data.results);
        setLoading(false);
      });
    }, 3000);
  }, []);

  return (
    <>
      <h1>My favorite characters! 👋</h1>
      <CharactersList
        loading={loading}
        pokemonCharacters={pokemonCharacters}
        starwarsCharacters={starwarsCharacters}
        rickmortyCharacters={rickmortyCharacters}
      />
    </>
  );
}

export default App;
