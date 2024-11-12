let answer = document.querySelector(".answer");
let btn = document.querySelector("button")
let answers = [
  "It is certain.",
  "Without a doubt.",
  "Ask again later.",
  "Cannot predict now.",
  "Don't count on it.",
  "My sources say no.",
  "Outlook good.",
  "Signs point to yes.",
];

function getRandomAnswer() {
  const randomIndex = Math.floor(Math.random() * answers.length);
  return answers[randomIndex];
}
getRandomAnswer();

btn.addEventListener("click", (e) => {
  e.preventDefault;
  const question = document.getElementById("question").value;
  if (question.trim() !== "") {
    const answer = getRandomAnswer();
    document.getElementById("answer").textContent = answer;
  } else {
    document.getElementById("answer").textContent = "Please ask a question!";
  }
  document.getElementById("question").value = ""; 
});
getRandomAnswer();

answer.style.margin = "30px"

