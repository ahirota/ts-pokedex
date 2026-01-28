import { createInterface, type Interface } from "readline";
import { getCommands } from "./registry.js";
import { PokeAPI } from "./pokeapi.js";

// CLI Command Type
export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

// State Type
export type State = {
    readline: Interface;
    commands: Record<string, CLICommand>;
    pokeapi: PokeAPI;
    nextLocationsURL: string | null;
    prevLocationsURL: string | null;
}

// Init State
export const initState = (cacheInterval: number): State => {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "TS-Pokedex > "
    });

    const registry = getCommands();

    return {
        readline: rl,
        commands: registry,
        pokeapi: new PokeAPI(cacheInterval),
        nextLocationsURL: null,
        prevLocationsURL: null,
    }
}