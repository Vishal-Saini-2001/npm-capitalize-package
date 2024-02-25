const capitalise = (s) => {
    const array = s.split(" ");
    for(let i=0; i<array.length; i++)
    {
        let fc = (array[i].charAt(0).toUpperCase());
        let word = array[i];
        let spWord = word.split("");
        spWord[0] = fc;
        array[i] = spWord.join("");
    }
    return array.join(" ");
}

module.exports = capitalise;