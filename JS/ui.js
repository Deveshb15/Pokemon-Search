class UI{
    constructor(){
        this.infoData = document.getElementById('infoData');
    }


    // capitalize first letter
    capitalizeLetter(str){
        return str.toLowerCase()
                  .split(' ')
                  .map(word => word[0].toUpperCase() + word.substr(1))
                  .join(' ');
    }
 
    // show data
    showData(data){
       let output = `
       <div class="dynamic-js">
            <img id="poke-sprite" src="${data.sprites.front_default}" alt=""> 
        </div>
          <div class="row">
            <div class="col-md-6">
                <ul class="list-group mt-1" style="color: #000">
                <li class="list-group-item">Name:  <span class="font-poke">${this.capitalizeLetter(data.name)}</span></li>
                <li class="list-group-item">Type:  <span class="font-poke">${this.capitalizeLetter(data.types[0].type.name)}</span></li>
                <li class="list-group-item">Abilities:  <span class="font-poke">${this.capitalizeLetter(data.abilities[0].ability.name)}</span>,  <span class="font-poke">${this.capitalizeLetter(data.abilities[1].ability.name)}</span></li>
                <li class="list-group-item">Moves:  <span class="font-poke">${this.capitalizeLetter(data.moves[0].move.name)}</span>,  <span class="font-poke">${this.capitalizeLetter(data.moves[1].move.name)}</span></li>
                </ul>
            </div>
          </div>`;

        document.getElementById('infoData').innerHTML = output;
    }

    // clear data
    clearData(){
        this.infoData.innerHTML = '';
    }


    // Show alert message
  showAlert(message, className) {
    // Clear any remaining alerts
    this.clearAlert();
    // Create div
    const div  =  document.createElement('div');
    // Add classes
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const bodyDiv = document.querySelector('#body-div');
    // Get search box
    const submitBtn =  document.querySelector('#submit-btn');
    // Insert alert
    bodyDiv.insertBefore(div, submitBtn);

    // Timeout after 3 sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if(currentAlert){
      currentAlert.remove();
    }
  }


}