
const obtenerPokemon = require("./library");

let pokemon = (element) => { 
    let abilites = element.abilities.map(abilitie => {
        return abilitie.ability.name
    });
    console.log(`Nombre: ${element.name} `) 
    console.log(`Habilidades: ${abilites}  `) 
}

obtenerPokemon('pikachu', pokemon);
