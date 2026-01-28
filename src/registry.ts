import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapBack, commandExplore } from "./command_map.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";

import type { CLICommand } from "./state.js";

// Object Literal for getting all commands
export const getCommands = (): Record<string, CLICommand> => {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
        name: "help",
        description: "Displays a help message",
        callback: commandHelp,
    },
    map: {
        name: "map",
        description: "Displays the next paginated result of 20 Locations in the Pokemon world. The initial call returns the first page.",
        callback: commandMap,
    },
    mapb: {
        name: "mapb",
        description: "Displays the previous paginated result of 20 Locations in the Pokemon world, if a previous page exists. Otherwise, alerts user they are on the first page.",
        callback: commandMapBack,
    },
    explore: {
        name: "explore",
        description: "Requires a location area name. Displays the possible Pokemon encounters in a given location area.",
        callback: commandExplore,
    },
    catch: {
        name: "catch",
        description: "Requires a Pokemon name. Displays whether or not you successfully catch a Pokemon.",
        callback: commandCatch,
    },
    inspect: {
        name: "inspect",
        description: "Requires a Pokemon name. Displays Pokemon details if Pokemon exists in Pokedex. Otherwise alerts user they need to catch the Pokemon.",
        callback: commandInspect,
    },
  };
}