import type { State } from "./state.js";

// Start REPL Process
export const startREPL = (state: State) => {
    const { readline, commands } = state;

    readline.prompt();

    readline.on("line", (line) => {
        const cleaned = cleanInput(line);
        
        if (cleaned.length === 0) {
            readline.prompt();
            return;
        }

        const command = cleaned[0];

        if (!(command in commands)) {
            console.log("Unknown command");
            readline.prompt();
            return;
        }

        try {
            commands[command].callback(state);
        } catch (e) {
            if (e instanceof Error) {
                console.log(`Error: ${e.message}`);
            } else {
                console.log(`Unexpected Error: ${e}`);
            }
        }

        readline.prompt();
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