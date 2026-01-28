import { Cache } from "./pokecache.js";

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";
    private apiCache: Cache;

    constructor(cacheInterval: number) {
        this.apiCache = new Cache(cacheInterval)
    }

    closeCache() {
        this.apiCache.stopReapLoop();
    }

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        if (!pageURL) { pageURL = PokeAPI.baseURL + "/location-area/"; }

        const cached = this.apiCache.get<ShallowLocations>(pageURL);
        if (cached) {
            console.log('Retrieving Cached Data:'); 
            return cached; 
        }

        try {
            const response = await fetch(pageURL, {method: "GET"});

            if (!response.ok) {
                throw new Error(`Error accessing API: ${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            this.apiCache.add<ShallowLocations>(pageURL, json);

            return json;
        } catch (e) {
            throw new Error(`Error fetching location areas: ${(e as Error).message}`);
        }
    }

    async fetchLocation(locationName: string): Promise<Location> {
        const locationURL = PokeAPI.baseURL + `/location-area/${locationName}/`;

        const cached = this.apiCache.get<Location>(locationURL);
        if (cached) {
            console.log('Retrieving Cached Data:'); 
            return cached; 
        }

        try {
            const response = await fetch(locationURL, {method: "GET"});

            if (!response.ok) {
                throw new Error(`Error accessing API: ${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            this.apiCache.add<Location>(locationURL, json);

            return json;
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
