import { auth } from "./Firebase.js";

const apiKey = "981715055ee64f4689f4c8383c76315e";

async function loadGames() {
    try {
        const response = await fetch(
            `https://api.rawg.io/api/games?key=${apiKey}&page_size=10`
        );

        const data = await response.json();

        console.log(data.results);

    } catch (error) {
        console.log(error);
    }
}

loadGames();
