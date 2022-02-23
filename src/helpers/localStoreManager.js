
export function addFavorite({id, name, image, types}) {
    
    // let favorites = getFavorites();
    // if (favorites === null) {
    //     favorites = [obj];
    // } else {
    //     favorites.push(obj);
    // }
    // localStorage.setItem("favorites", JSON.stringify(favorites));


    var testObject = [{ 'one': 1, 'two': 2, 'three': 3 }];
    let obj = {'id': 'id', 'name': 'name', 'image': 'image', 'types': 'types'};

    testObject.push(obj)
    localStorage.setItem('testObject', JSON.stringify(testObject));

    
    var retrievedObject = localStorage.getItem('testObject');

    console.log('retrievedObject: ', JSON.parse(retrievedObject));
}

export function removeFavorite(name) {
    let favorites = getFavorites();
    let newFavorites = []
    for (let i=0; i<favorites.length; i++) {
        if (favorites[i] !== name) {
            newFavorites.push(favorites[i]);
        }
    }
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
}

export function getFavorites() {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    console.log(favorites);
    return favorites;
}