const displayElement = document.getElementById("display");
const buttonsElement = document.getElementById("buttons");
 
let calcResults = ""

buttonsElement.addEventListener("click", (event) => {
  if (event.target.id === "clear") {
    calcResults = ""
    displayElement.textContent = "0";
  }

  else if (event.target.dataset.value) {
    calcResults = calcResults + event.target.dataset.value;
    displayElement.textContent = calcResults;
  }
});