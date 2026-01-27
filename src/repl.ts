import { createInterface } from "readline";
import { getCommands } from "./registry.js";
import console from "console";

// Start REPL Process
export const startREPL = () => {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "TS-Pokedex > "
    });

    rl.prompt();

    rl.on("line", (line) => {
        const cleaned = cleanInput(line);
        
        if (cleaned.length === 0) {
            rl.prompt();
            return;
        }

        const command = cleaned[0];
        const commands = getCommands();

        if (!(command in commands)) {
            console.log("Unknown command");
            rl.prompt();
            return;
        }

        try {
            commands[command].callback(commands)
        } catch (e) {
            if (e instanceof Error) {
                console.log(`Error: ${e.message}`);
            } else {
                console.log(`Unexpected Error: ${e}`);
            }
        }

        rl.prompt();
    });
};

// Clean Input: 
// Accepts String Input 
// Returns Array of words with whitespace removed and words in lowercase
// Is this too fancy? Chained trim and split and reduce...
export const cleanInput = (input: string): string[] => {
    return input
    .trim()
    .split(" ")
    .reduce((cleaned, word) => {
        if (word !== "") {
            word = word.toLowerCase();
            cleaned.push(word);
        }
        return cleaned;
    }, [] as string[]);
};