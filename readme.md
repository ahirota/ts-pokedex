# Typescript Pokedex
Simple REPL program that using typescript and PokeAPI.

The following commands are available:
- map: Displays the next paginated result of 20 Locations in the Pokemon world. The initial call returns the first page.
- mapb: Displays the previous paginated result of 20 Locations in the Pokemon world, if a previous page exists. Otherwise, alerts user they are on the first page.
- explore: Requires a location area name. Displays the possible Pokemon encounters in a given location area.
- catch: Requires a Pokemon name. Displays whether or not you successfully catch a Pokemon.
- inspect: Requires a Pokemon name. Displays Pokemon details if Pokemon exists in Pokedex. Otherwise alerts user they need to catch the Pokemon.
- pokedex: Displays list of Pokemon entries saved in your Pokedex. If no entries, alerts user their Pokedex is empty.
- help: Displays a help message
- exit: Exits the pokedex

## Future Considerations:
- Implement the repl Node module
- Simulate battles between pokemon
- Add more unit tests
- Refactor your code to organize it better and make it more testable
- Keep pokemon in a "party" and allow them to level up
- Allow for pokemon that are caught to evolve after a set amount of time
- Persist a user's Pokedex to disk so they can save progress between sessions
- Use the PokeAPI to make exploration more interesting. For example, rather than typing the names of areas, maybe you are given choices of areas and just type "left" or "right"
- Random encounters with wild pokemon
- Adding support for different types of balls (Pokeballs, Great Balls, Ultra Balls, etc), which have different chances of catching pokemon