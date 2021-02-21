class Pokemon{
    constructor(){}

    async getPokemon(pokeName){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);

        const responseData = await response.json();

        return responseData;
    }
}