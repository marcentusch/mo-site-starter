// Register service worker
// Check if service workers is supported in the browser
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./serviceworker.js")
      // Service Worker registered successfully
      .then((reg) => {
        return;
      })
      // Service Worker failed
      .catch((err) => {
        return;
      });
  });
}
