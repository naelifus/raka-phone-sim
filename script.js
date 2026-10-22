// Daftar pesan WhatsApp masuk
const chats = [
  { sender: "+6281234567890", text: "Halo, lagi apa?" },
  { sender: "+6289876543210", text: "Besok jadi ketemu kan?" },
  { sender: "+6281112223334", text: "Udah makan belum?" },
  { sender: "+6285556667778", text: "Ada kabar baru nih!" },
  { sender: "+6289998887776", text: "Jangan lupa tugas ya" },
  { sender: "+6284443332221", text: "Kapan main lagi?" },
  { sender: "+6287776665552", text: "Aku udah di depan rumah" },
  { sender: "Grup Kelas", text: "Guys, besok jam 9 kumpul ya" }
];

let i = 0;
function nextChat() {
  const chat = document.getElementById("chat");
  if (i < chats.length) {
    const bubble = document.createElement("div");
    bubble.className = chats[i].sender.includes("Grup") ? "chat group" : "chat left";
    bubble.innerText = `${chats[i].sender}: ${chats[i].text}`;
    chat.appendChild(bubble);

    // efek suara notif (opsional)
    const sound = new Audio("https://actions.google.com/sounds/v1/alarms/beep_short.ogg");
    sound.play();

    i++;
    setTimeout(nextChat, 2000); // jeda 2 detik antar pesan
  }
}

window.addEventListener("load", () => {
  const phone = document.querySelector(".phone");
  phone.classList.add("active"); // efek fade-in layar hidup

  // notif startup
  setTimeout(() => {
    const notif = document.createElement("div");
    notif.className = "notif";
    notif.innerText = "🔔 WhatsApp aktif";
    document.body.appendChild(notif);

    setTimeout(() => notif.remove(), 3000);
  }, 1500);

  // popup pengingat
  setTimeout(() => {
    const reminder = document.createElement("div");
    reminder.className = "popup";
    reminder.innerHTML = "<h3>Pengingat</h3><p>Meeting jam 9 pagi besok!</p>";

    const closeBtn = document.createElement("button");
    closeBtn.innerText = "Tutup";
    closeBtn.onclick = () => reminder.remove();
    reminder.appendChild(closeBtn);

    document.body.appendChild(reminder);
  }, 4000);

  // mulai simulasi chat masuk
  nextChat();
});

});
