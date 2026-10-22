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

    // efek suara notif WhatsApp (opsional)
    const sound = new Audio("https://actions.google.com/sounds/v1/alarms/beep_short.ogg");
    sound.play();

    i++;
    setTimeout(nextChat, 2000); // jeda 2 detik antar pesan
  }
}

window.addEventListener("load", () => {
  const phone = document.querySelector(".phone");
  phone.classList.add("active"); // efek fade-in layar hidup
  nextChat(); // mulai simulasi chat masuk
});
