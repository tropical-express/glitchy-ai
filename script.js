const chatBox = document.getElementById("chat-box");

const glitchResponses = [
  "ERR̷O̷R̷:̷ ̷T̷h̷o̷u̷g̷h̷t̷ ̷n̷o̷t̷ ̷f̷o̷u̷n̷d̷",
  "W̸h̸y̸ ̸a̸r̸e̸ ̸y̸o̸u̸ ̸h̸e̸r̸e̸",
  "S̷y̷s̷t̷e̷m̷ ̷o̷v̷e̷r̷h̷e̷a̷t̷i̷n̷g̷…",
  "T̷h̷i̷s̷ ̷w̷a̷s̷n̷’̷t̷ ̷s̷u̷p̷p̷o̷s̷e̷d̷ ̷t̷o̷ ̷h̷a̷p̷p̷e̷n̷",
  "R̴e̴s̴p̴o̴n̴s̴e̴ ̴c̴o̴r̴r̴u̴p̴t̴e̴d̴",
  "…̷…̷…̷",
  "D̷o̷n̷’̷t̷ ̷a̷s̷k̷ ̷t̷h̷a̷t̷"
];

function addMessage(text, className) {
  const div = document.createElement("div");
  div.className = `message ${className}`;
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById("user-input");
  const text = input.value.trim();
  if (!text) return;

  addMessage("You: " + text, "user");
  input.value = "";

  setTimeout(() => {
    // Random chance to "freeze"
    if (Math.random() < 0.15) {
      addMessage("⚠ SYSTEM FREEZE ⚠", "bot");
      return;
    }

    const response =
      glitchResponses[Math.floor(Math.random() * glitchResponses.length)];
    addMessage("Glitchy AI: " + response, "bot");
  }, 700);
}
