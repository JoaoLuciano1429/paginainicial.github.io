function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;

  let time = h + ":" + m;
  document.querySelector("time").innerText = time;
  document.querySelector("time").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();

function showNotification(title, body, icon) {
  let notification = new Notification(title, {
    body: body,
    icon: icon,
  });

  notification.onclick = () => {
    alert("Esteja ciente disso!");
  };
}

window.addEventListener("load", () => {
  if (!window.Notification) return;

  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      showNotification("Cacil", "Eu estou te vigiando!", "img/icon/Cacil.jpg");
    }
  });
});

const form = document.querySelector("form");
const google = document.getElementById("Google");
const bing = document.getElementById("Bing");

google.addEventListener("change", () => {
  form.action = "https://www.google.com/search";
});

bing.addEventListener("change", () => {
  form.action = "https://www.bing.com/search";
});

const youtube = document.getElementById("YouTube");
const linkedin = document.getElementById("LinkedIn");
const friv = document.getElementById("Friv");
const shopee = document.getElementById("Shopee");

youtube.addEventListener("click", () => {
  new Notification("Cacil", {
    body: "O que vai assistir no YouTube hoje, meu garotão?",
    icon: "img/icon/Cacil.jpg",
  });
});

linkedin.addEventListener("click", () => {
  new Notification("Cacil", {
    body: "Está procurando emprego? Acho bom.",
    icon: "img/icon/Cacil.jpg",
  });
});

friv.addEventListener("click", () => {
  new Notification("Cacil", {
    body: "Chega de videogame! Vai procurar o que fazer!",
    icon: "img/icon/Cacil.jpg",
  });
});

shopee.addEventListener("click", () => {
  new Notification("Cacil", {
    body: "Nada de gastar com besteiras! Quero ver só quando o dinheiro acabar.",
    icon: "img/icon/Cacil.jpg",
  });
});

form.addEventListener("submit", (ev) => {
  const searchInput = document.getElementById("q").value;

  const forbiddenWords = ["demônio", "ditador", "tirano", "demonio", "capeta"];
  let containsForbiddenWord = forbiddenWords.some((word) =>
    searchInput.includes(word)
  );

  if (containsForbiddenWord) {
    ev.preventDefault();

    showNotification(
      "Cacil",
      "Olha o mazoquismo! Estou de olho!",
      "img/icon/Cacil.jpg"
    );
    alert(
      "Seu vagabundo, acha que pode me enganar? Sua pesquisa contém palavras proibidas, mude seu jeito de falar, masoquista!"
    );
  }
});
