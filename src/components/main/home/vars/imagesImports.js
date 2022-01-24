import Pokemon1 from '../../../../assets/images/bulbasaur.png';
import Pokemon2 from '../../../../assets/images/ivysaur.png';
import Pokemon3 from '../../../../assets/images/venusaur.png';
import Pokemon4 from '../../../../assets/images/charmander.png';

const pokemons = {
    "001": Pokemon1,
    "002": Pokemon2,
    "003": Pokemon3,
    "004": Pokemon4
};

export function getPokemon(number) {
  return pokemons[number];
}
