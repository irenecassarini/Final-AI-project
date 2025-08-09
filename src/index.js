function displayAffirmation(response){
new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "334ff5a8425o317bf171aa4a1a6b3b0t";
    let context = "You are a wise old witch that hates capitalism and loves self-confidence.";
    let prompt = `Please create a short affirmation with an anticapitalist perspective about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`; 
 
  let poemElement = document.querySelector("#poem");
   poemElement.classList.remove("hidden");
   poemElement.innerHTML = `<div class="generating"> 💚 Generating an affirmation about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayAffirmation);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

