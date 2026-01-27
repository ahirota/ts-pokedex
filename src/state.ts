import { createInterface, type Interface } from "readline";
import { getCommands } from "./registry.js";

// CLI Command Type
export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};

// State Type
export type State = {
    readline: Interface;
    commands: Record<string, CLICommand>
}

// Init State
export const initState = (): State => {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "TS-Pokedex > "
    });

    const registry = getCommands();

    return {
        readline: rl,
        commands: registry
    }
}