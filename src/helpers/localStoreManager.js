
// export function addFavorite(id, name, image, types) {
    
//     let obj = {'id': id, 'name': name, 'image': image, 'types': types};
//     let favorites = getFavorites();
//     if (favorites === null) {
//         favorites = [obj];
//     } else {
//         favorites.push(obj);
//     }
//     localStorage.setItem("favorites", JSON.stringify(favorites));
// }

// export function removeFavorite(name) {
//     let favorites = getFavorites();
//     let newFavorites = []
//     for (let i=0; i<favorites.length; i++) {
//         if (favorites[i].name !== name) {
//             newFavorites.push(favorites[i]);
//         }
//     }
//     localStorage.setItem("favorites", JSON.stringify(newFavorites));
// }

// export function getFavorites() {
//     let favorites = JSON.parse(localStorage.getItem("favorites"));
//     return favorites;
// }

// export function checksIfFavorite(pokemonName) {
//     let favorites = getFavorites();
//     for (let i=0; i<favorites.length; i++) {
//         if (favorites[i].name === pokemonName) {
//             return true;
//         }
//     }
//     return false;
// }