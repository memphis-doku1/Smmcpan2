const CACHE_NAME = 'smmcpan-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icone5.png'
];

// Installation du Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Récupération des requêtes (Network first, fallback to cache)
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
