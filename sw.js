const CACHE_NAME = 'kyub-v1';
const ASSETS = [
  './',
  './index.html',
  './css/variables.css',
  './css/components.css',
  './js/mockData.js',
  './js/app.js',
  './assets/logo.png',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
