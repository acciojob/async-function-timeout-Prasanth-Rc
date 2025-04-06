//your JS code here. If required.
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const button = document.getElementById("btn");
const outputDiv = document.getElementById("output");

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayMessage() {
  const message = textInput.value.trim();
  const delay = parseInt(delayInput.value);

  if (!message || isNaN(delay) || delay < 0) {
    outputDiv.textContent = "Please enter valid text and delay.";
    return;
  }

  outputDiv.textContent = "";
  await wait(delay);
  outputDiv.textContent = message;
}

button.addEventListener("click", displayMessage);
