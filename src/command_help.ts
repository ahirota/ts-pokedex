import type { State } from "./state.js";

export const commandHelp = async (state: State) => {
    console.log();
    console.log("Welcome to the Pokedex!\nUsage:\n");
    for (const command of Object.values(state.commands)) {
        console.log(`${command.name}: ${command.description}`);
    }
    console.log();
};