function sendMessage(){

  let input = document.getElementById("userInput");

  let chatBox = document.getElementById("chatBox");

  if(input.value.trim() === ""){
    return;
  }

  let userMessage = document.createElement("div");

  userMessage.classList.add("message","user");

  userMessage.innerText = input.value;

  chatBox.appendChild(userMessage);

  let aiMessage = document.createElement("div");

  aiMessage.classList.add("message","ai");

  aiMessage.innerText = "AI is thinking...";

  chatBox.appendChild(aiMessage);

  input.value = "";

  chatBox.scrollTop = chatBox.scrollHeight;
}