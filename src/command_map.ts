import type { State } from "./state.js";

export const commandMap = async (state: State) => {
    const api = state.pokeapi;
    let locationAreasJson;

    if (state.nextLocationsURL) {
        locationAreasJson = await api.fetchLocations(state.nextLocationsURL);
    } else {
        locationAreasJson = await api.fetchLocations();
    }

    state.prevLocationsURL = locationAreasJson.previous;
    state.nextLocationsURL = locationAreasJson.next;

    for (const locationArea of locationAreasJson.results) {
        console.log(locationArea.name);
    }
};

export const commandMapBack = async (state: State) => {
    if (!state.prevLocationsURL) {
        console.log("you're on the first page")
        return;
    }

    const api = state.pokeapi;
    const locationAreasJson = await api.fetchLocations(state.prevLocationsURL);

    state.prevLocationsURL = locationAreasJson.previous;
    state.nextLocationsURL = locationAreasJson.next;

    for (const locationArea of locationAreasJson.results) {
        console.log(locationArea.name);
    }
};

export const commandExplore = async (state: State, name: string) => {
    const api = state.pokeapi;
    const locationAreaJson = await api.fetchLocation(name);

    console.log(`Exploring ${locationAreaJson.name}...`);
    console.log("Found Pokemon:");
    for (const pokemonEncounter of locationAreaJson.pokemon_encounters) {
        console.log(` - ${pokemonEncounter.pokemon.name}`);
    }
};