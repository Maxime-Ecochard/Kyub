const CACHE_NAME = 'kyub-v2';
const ASSETS = [
  './',
  './index.html',
  './css/variables.css',
  './css/components.css',
  './js/mockData.js',
  './js/educational_database.js',
  './js/feed_database.js',
  './js/app.js',
  './assets/logo.png',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (e) => {
  // Network first, falling back to cache
  e.respondWith(
    fetch(e.request)
      .then((response) => {
        // If it's a valid response, clone and put it in cache
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => caches.match(e.request))
  );
});
