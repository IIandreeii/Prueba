import { useEffect, useState } from "react";

function PokemonSelect({ onSelect }) {
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState("");

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
            .then(response => response.json())
            .then(data => setPokemons(data.results));
    }, []);

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedPokemon(selectedValue);
        onSelect(selectedValue);
    };

    return (
        <div>
            <select value={selectedPokemon} onChange={handleChange}>
                <option value="">Selecciona un Pokémon</option>
                {pokemons.map((pokemon, index) => (
                    <option key={index} value={pokemon.name}>{pokemon.name}</option>
                ))}
            </select>
            {selectedPokemon && (
                <div>
                    <h3>Pokémon Seleccionado: {selectedPokemon}</h3>
                    <img src={`https://img.pokemondb.net/sprites/home/normal/${selectedPokemon}.png`} alt={selectedPokemon} />
                </div>
            )}
        </div>
    );
}

export default PokemonSelect;