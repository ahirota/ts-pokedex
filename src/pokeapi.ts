export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    constructor() {}

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        if (!pageURL) { pageURL = PokeAPI.baseURL + "/location-area/"; }

        try {
            const response = await fetch(pageURL, {method: "GET"});

            if (!response.ok) {
                throw new Error(`Error accessing API: ${response.status} ${response.statusText}`);
            }

            return await response.json();
        } catch (e) {
            throw new Error(`Error fetching location areas: ${(e as Error).message}`);
        }
    }

    async fetchLocation(locationName: string): Promise<Location> {
        const locationURL = PokeAPI.baseURL + `/location-area/${locationName}/`;

        try {
            const response = await fetch(locationURL, {method: "GET"});

            if (!response.ok) {
                throw new Error(`Error accessing API: ${response.status} ${response.statusText}`);
            }

            return await response.json();
        } catch (e) {
            throw new Error(`Error fetching location area [${locationName}]: ${(e as Error).message}`);
        }
    }
}

export type ShallowLocations = {
    count: number;
    next: string | null;
    previous: string | null;
    results: NamedAPIResource[]; 
};

export type Location = {
    id: number;
    name: string;
    game_index: number;
    encounter_method_rates: EncounterMethodRate[];
    location: NamedAPIResource;
    names: Name[];
    pokemon_encounters: PokemonEncounter[];
};

// Helper Types
type Name = {
    name: string;
    language: NamedAPIResource;
}

type EncounterMethodRate = {
    encounter_method: NamedAPIResource;
    version_details: EncounterVersionDetails[];
}

type EncounterVersionDetails = {
    rate: number;
    version: NamedAPIResource;
}

type PokemonEncounter = {
    pokemon: NamedAPIResource;
    version_details: VersionEncounterDetail[];
}

type VersionEncounterDetail = {
    version: NamedAPIResource;
    max_chance: number;
    encounter_details: Encounter[];
}

type Encounter = {
    min_level: number;
    max_level: number;
    condition_values: NamedAPIResource;
    chance: number;
    method: NamedAPIResource;
}

// Base Named API Resource Type
type NamedAPIResource = {
    name: string;
    url: string;
}
