const jocks = document.querySelector(".jock");
const btn = document.querySelector(".btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((item) => {
        jocks.textContent = `${item.joke}`;
    });
};
btn.addEventListener("click", getJoke);
// getJoke();
