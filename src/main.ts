import { initState } from "./state.js";
import { startREPL } from "./repl.js";

function main() {
  const state = initState(15000);
  startREPL(state);
}

main();