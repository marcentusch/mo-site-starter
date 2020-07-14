const cacheName = "v1";

const cacheAssets = ["index.html", "/css/style.css", "/js/main.js"];

// Call Install Event
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        // Cache all specified assets
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// Call Activate Event
self.addEventListener("activate", (e) => {
  // Remove unneeded caches
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Call Fetch Event
self.addEventListener("fetch", (e) => {
  // Get the assets from cache
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
