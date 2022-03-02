export default function capitalizeFirstLetter(string) {
    /* 
        Helper function that capitalizes the first letter of a string.
        Used in many places, as in the pokemon's name.
    */
    return string.charAt(0).toUpperCase() + string.slice(1);
}