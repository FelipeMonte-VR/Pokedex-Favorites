import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({children}) => {
    /*
        Creates a provider to share favorite pokemons between components.
        Uses "localStorage" to store the favorites list locally.
    */
    
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")));

    return(
        <FavoritesContext.Provider
            value={{
                favorites,
                setFavorites
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

export const useFavoritesConstext = () => {
    const {
        favorites,
        setFavorites
    } = useContext(FavoritesContext);

    function addFavorite(id, name, image, types) {
        let obj = {'id': id, 'name': name, 'image': image, 'types': types};
        let newFavorites = favorites;
        if (newFavorites === null) {
            newFavorites = [obj];
        } else {
            newFavorites.push(obj);
        }
        
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        setFavorites(newFavorites);
    }
    
    function removeFavorite(pokemonName) {
        let newFavorites = []
        for (let i=0; i<favorites.length; i++) {
            if (favorites[i].name !== pokemonName) {
                newFavorites.push(favorites[i]);
            }
        }

        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        setFavorites(newFavorites);
    }

    function checksIfFavorite(pokemonName) {
        for (let i=0; i<favorites.length; i++) {
            if (favorites[i].name === pokemonName) {
                return true;
            }
        }
        return false;
    }

    return {
        favorites,
        setFavorites,
        addFavorite,
        removeFavorite,
        checksIfFavorite
    }
}