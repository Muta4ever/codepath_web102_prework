/*****************************************************************************
 * Challenge 2: Review the provided code. The provided code includes:
 * -> Statements that import data from games.js
 * -> A function that deletes all child elements from a parent element in the DOM
*/

// import the JSON data about the crowd funded games from the games.js file
import GAMES_DATA from './games.js';

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA)

// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/*****************************************************************************
 * Challenge 3: Add data about each game as a card to the games-container
 * Skills used: DOM manipulation, for loops, template literals, functions
*/

// grab the element with the id games-container
const gamesContainer = document.getElementById("games-container");

// create a function that adds all data from the games array to the page
function addGamesToPage(games) {

    // loop over each item in the data
    games.forEach((game)=> {
        // create a new div element, which will become the game card
        const gameCard = document.createElement("div");

        // add the class game-card to the list
        gameCard.classList.add("game-card");

        // set the inner HTML using a template literal to display some info 
        // about each game
        // TIP: if your images are not displaying, make sure there is space
        // between the end of the src attribute and the end of the tag ("/>")

        gameCard.innerHTML = `
        <img src="${game.img}" class="game-img">
        <h3>${game.name}</h3>
        <p>${game.description}</p>
        <p>Backers: ${game.backers}</p>
       `;

        // append the game to the games-container
        gamesContainer.appendChild(gameCard);

         });
}

// call the function we just defined using the correct variable
// later, we'll call this function using a different list of games

addGamesToPage(GAMES_JSON);



const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

searchInput.addEventListener("input", (event)=>{
    const searchTerm = event.target.value.toLowerCase();

    if (searchTerm === "") {
        searchResults.classList.add("hidden");
        searchResults.innerHTML = "";
        return;
  }

    const filtered = GAMES_JSON.filter((game) =>{
        return game.name.toLowerCase().includes(searchTerm) ||
               game.description.toLowerCase().includes(searchTerm) 
           
    });

    displaySearchResults(filtered)

});

function displaySearchResults(games) {
  searchResults.innerHTML = "";
  searchResults.classList.remove("hidden");
  
  if (games.length === 0) {
    searchResults.innerHTML = "<div class='search-result-item'>No games found</div>";
    return;
  }
  
  // Create clickable result items
  games.forEach(game => {
    const resultItem = document.createElement("div");
    resultItem.classList.add("search-result-item");
    
    resultItem.innerHTML = `
      <div class="result-info">
        <p>${game.name}: ${game.description.substring(0, 60)}...</p>
      </div>
    `;
    
    // When clicked, show only that game
    resultItem.addEventListener("click", () => {
      // Clear search and hide results
      searchInput.value = "";
      searchResults.classList.add("hidden");
      
      // Clear the games container
      deleteChildElements(gamesContainer);
      
      // Show only the clicked game
      addGamesToPage([game]);
      // Scroll to the games section
    gamesContainer.scrollIntoView({ behavior: 'smooth' });
    });
    
    searchResults.appendChild(resultItem);
  });
}

/*************************************************************************************
 * Challenge 4: Create the summary statistics at the top of the page displaying the
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: arrow functions, reduce, template literals
*/

// grab the contributions card element
const contributionsCard = document.getElementById("num-contributions");

// use reduce() to count the number of total contributions by summing the backers
const totalContributions = GAMES_JSON.reduce((acc, game) => {
    return acc + game.backers;
}, 0)

// set the inner HTML using a template literal and toLocaleString to get a number with commas
contributionsCard.innerHTML = `${totalContributions.toLocaleString('en-US')}`


// grab the amount raised card, then use reduce() to find the total amount raised
const raisedCard = document.getElementById("total-raised");
const totalMoney = GAMES_JSON.reduce((acc, game) => {
    return acc + game.pledged;
}, 0)

// set inner HTML using template literal
raisedCard.innerHTML = `${totalMoney.toLocaleString('en-US')}`

// grab number of games card and set its inner HTML
const gamesCard = document.getElementById("num-games");


const totalGames = GAMES_JSON.reduce((acc, game) => {
    return acc + 1;
}, 0);

gamesCard.innerHTML =  `${totalGames.toLocaleString('en-US')}`
/*************************************************************************************
 * Challenge 5: Add functions to filter the funded and unfunded games
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: functions, filter
*/

// show only games that do not yet have enough funding


function filterUnfundedOnly() {
    deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have not yet met their goal

     let unfundedGames = GAMES_JSON.filter((game) => {
        return game.goal > game.pledged;
     });


    // use the function we previously created to add the unfunded games to the DOM
    addGamesToPage(unfundedGames);

}

// show only games that are fully funded
function filterFundedOnly() {
    deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have met or exceeded their goal
    let fundedGames = GAMES_JSON.filter((game) => {
        return game.pledged > game.goal;
     });

    // use the function we previously created to add unfunded games to the DOM
    addGamesToPage(fundedGames);
}



// show all games
function showAllGames() {
    deleteChildElements(gamesContainer);

    // add all games from the JSON data to the DOM
    addGamesToPage(GAMES_JSON);
}

// select each button in the "Our Games" section
const unfundedBtn = document.getElementById("unfunded-btn");
const fundedBtn = document.getElementById("funded-btn");
const allBtn = document.getElementById("all-btn");

// add event listeners with the correct functions to each button

unfundedBtn.addEventListener('click', ()=>{
    filterUnfundedOnly();
});

fundedBtn.addEventListener('click', ()=>{
    filterFundedOnly();
});

allBtn.addEventListener('click', ()=>{
    showAllGames();
})
/*************************************************************************************
 * Challenge 6: Add more information at the top of the page about the company.
 * Skills used: template literals, ternary operator
*/

// grab the description container
const descriptionContainer = document.getElementById("description-container");

// use filter or reduce to count the number of unfunded games
let unfundedGames = GAMES_JSON.filter((game) => {
        return game.goal > game.pledged;
     });
let unfundedGamesCount = unfundedGames.length;
// create a string that explains the number of unfunded games using the ternary operator

// create a new DOM element containing the template string and append it to the description container

let describe = document.createElement("p");

describe.innerHTML = `A total of $${totalMoney.toLocaleString('en-US')} has been raised for ${totalGames} games. Currently, ${unfundedGamesCount} ${unfundedGamesCount === 1 ? "game remains": "games remain"} unfunded. We need your help to fund these amazing games!`

descriptionContainer.appendChild(describe);


/************************************************************************************
 * Challenge 7: Select & display the top 2 games
 * Skills used: spread operator, destructuring, template literals, sort 
 */

const firstGameContainer = document.getElementById("first-game");
const secondGameContainer = document.getElementById("second-game");

const sortedGames =  GAMES_JSON.sort( (item1, item2) => {
    return item2.pledged - item1.pledged;
});

// use destructuring and the spread operator to grab the first and second games
const [firstGame, secondGame] = sortedGames;


// create a new element to hold the name of the top pledge game, then append it to the correct element
const firstGameElement = document.createElement('p');
firstGameElement.innerHTML = `${firstGame.name}`
firstGameContainer.appendChild(firstGameElement)

// do the same for the runner up item
const secondGameElement = document.createElement('p');
secondGameElement.innerHTML = `${secondGame.name}`
secondGameContainer.appendChild(secondGameElement)
