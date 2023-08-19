function CharactersList(props) {
  const {
    loading,
    pokemonCharacters,
    starwarsCharacters,
    rickmortyCharacters,
  } = props;

  if (loading) {
    return (
      <img width="100px" src="https://i.gifer.com/ZKZg.gif" alt="loading" />
    );
  }

  return (
    <>
      <ul>
        {pokemonCharacters.map((char) => (
          <li key={char.name}>
            <b>{char.name}</b>
          </li>
        ))}
      </ul>
      <ul>
        {starwarsCharacters.map((char) => (
          <li key={char.name}>
            <b>{char.name}</b>
          </li>
        ))}
      </ul>
      <ul>
        {rickmortyCharacters.map((char) => (
          <li key={char.name}>
            <b>{char.name}</b>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CharactersList;
