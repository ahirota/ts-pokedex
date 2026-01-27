import type { CLICommand } from "./registry.js";

// Ignore input
export const commandExit = (commands: Record<string, CLICommand>) => {
    console.log("Closing the Pokedex... Goodbye!");
    process.exit(0);
};