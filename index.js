const API = 'https://api.adviceslip.com/advice';
const number = document.querySelector(".number");
const advice = document.querySelector(".texto");
const dice = document.querySelector(".container_dice");

dice.addEventListener("click", fetchear);

async function fetchear() {
  try {
    let response = await fetch(API).then(response => response.json()).catch(error => console.log(error));
    number.innerHTML = `Advice #${response.slip.id}`
    advice.innerHTML = response.slip.advice;
    console.log(response.slip.advice)
  } catch (error) {
    console.log(error.message)
  }

}
fetchear();

// fetch(API)
//   .then(response => response.json())
//   .then(data => console.log(data));