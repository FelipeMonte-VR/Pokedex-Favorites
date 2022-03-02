export default function padNumeber(value) {
    /*
        Helper function to add up to 3 zeros at the beginning of the string.
        Used at pokemon's number.
    */
    return value.toString().padStart(3, '0');
}