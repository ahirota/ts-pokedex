import type { State } from "./state.js";

export const commandCatch = async (state: State, name: string) => {
    console.log(`Throwing a Pokeball at ${name}...`);

    const api = state.pokeapi;
    const pokemonJson = await api.fetchPokemon(name);

    const chanceMultiplier = pokemonJson.base_experience;

    if ((Math.random() * chanceMultiplier) < Math.random() * chanceMultiplier) {
        console.log(`${name} escaped!`);
        return;
    }

    console.log(`${name} was caught!`);
    console.log("You may now inspect it with the inspect command.")
    state.pokedex[name] = pokemonJson;
};