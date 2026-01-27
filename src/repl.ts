import { createInterface } from "readline";

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

        console.log(`Your command was: ${cleaned[0]}`);
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