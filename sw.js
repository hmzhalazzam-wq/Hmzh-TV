const CACHE_NAME = 'hmzh-tv-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// تثبيت التطبيق وتخزين الملفات
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// تشغيل التطبيق (جلب من الكاش أو الإنترنت)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
