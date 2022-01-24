const pokemons = [
    {
        "number": "001",
        "name": "bulbasaur",
        "type": "grass"
    },
    {
        "number": "002",
        "name": "ivysaur",
        "type": "grass"
    },
    {
        "number": "003",
        "name": "venusaur",
        "type": "grass"
    },
    {
        "number": "004",
        "name": "charmander",
        "type": "fire"
    }
];

export function getPokemons(filtro) {
    
    var filtrados = [];

    for (var i=0; i<pokemons.length; i++) {
        if (pokemons[i]["name"].toUpperCase().includes(filtro.toUpperCase())) {
            filtrados.push({
                "number": pokemons[i]["number"],
                "name": pokemons[i]["name"],
                "type": pokemons[i]["type"]
            });
        }
    }
    
    return filtrados;
}