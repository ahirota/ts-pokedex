import type { State } from "./state.js";

export const commandInspect = async (state: State, name: string) => {
    if (!(name in state.pokedex)) {
        console.log("you have not caught that pokemon");
        return;
    }

    const pokemon = state.pokedex[name];

    console.log(`Name: ${pokemon.name}`);
    console.log(`Height: ${pokemon.height}`);
    console.log(`Weight: ${pokemon.weight}`);
    console.log("Stats:");
    for (const stat of pokemon.stats) {
        console.log(`  -${stat.stat.name}: ${stat.base_stat}`);
    }
    console.log("Types:");
    for (const type of pokemon.types) {
        console.log(`  - ${type.type.name}`);
    }
};