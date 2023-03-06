// declare 
const clickJoke = document.getElementById('click-joke');
const showJoke = document.getElementById('joke');
const url = `https://v2.jokeapi.dev/joke/Any?type=single`;

let getJoke = () => {
    console.log(url);
    fetch(url)
    .then(data => data.json())
    .then(item => showJoke.textContent = `${item.joke}`);

}

clickJoke.addEventListener('click', getJoke);