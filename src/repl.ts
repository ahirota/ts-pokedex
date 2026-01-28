import type { State } from "./state.js";

// Start REPL Process
export const startREPL = (state: State) => {
    const { readline, commands } = state;

    readline.prompt();

    readline.on("line", async (line) => {
        const cleaned = cleanInput(line);
        
        if (cleaned.length === 0) {
            readline.prompt();
            return;
        }

        const command = cleaned[0];
        const args = cleaned.slice(1);

        if (!(command in commands)) {
            console.log("Unknown command");
            readline.prompt();
            return;
        }

        try {
            await commands[command].callback(state, ...args);
        } catch (e) {
            console.log(`An Error Occurred:\n--------------\n${e}`);
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