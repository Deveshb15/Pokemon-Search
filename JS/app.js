// Initialize Pokemon
const pokemon = new Pokemon;

// Initialize UI
const ui = new UI;

const input = document.getElementById('input-name');

const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', e => {

    const inputValue = input.value.toLowerCase();

    pokemon.getPokemon(inputValue)
    .then(data => {
        ui.showData(data);
    })
    .catch(() => {
        // Clear data
        ui.clearData();
        // show alert
        ui.showAlert("Pokemon not found!","alert alert-danger mt-4")
    })
    

    e.preventDefault();
})

