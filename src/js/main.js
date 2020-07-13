// Register service worker
// Check if service workers is supported in the browser
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./_/serviceworker.js")
      // Service Worker registered successfully
      .then((reg) => console.log("Service worker registered"))
      // Service Worker failed
      .catch((err) => console.error(err));
  });
}
