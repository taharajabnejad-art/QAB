let deferredPrompt;
const btn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  deferredPrompt = e;
  btn.hidden = false;
});

btn.addEventListener("click", () => {
  deferredPrompt.prompt();
});
