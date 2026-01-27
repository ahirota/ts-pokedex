import type { CLICommand } from "./registry.ts";

export const commandHelp = (commands: Record<string, CLICommand>) => {
    console.log("Welcome to the Pokedex!\nUsage:\n");
    for (const command of Object.values(commands)) {
        console.log(`${command.name}: ${command.description}`);
    }
};