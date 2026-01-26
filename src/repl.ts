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
}