setTimeout(() => {
  const chat = document.getElementById("chat");
  const bubble = document.createElement("div");
  bubble.className = "chat left";
  bubble.innerText = "Raka: ...halo?";
  chat.appendChild(bubble);

  setTimeout(() => {
    chat.innerHTML = "<div class='system'>[User has disappeared]</div>";
  }, 3000);
}, 2000);
