// Install Event
this.addEventListener('install', function (event) {
  console.log('Performing install action...');

  // Cache assets
  event.waitUntil(
    cacheAssets([
      '/',
      '/index.html',
      '/src/styles/styles.css',
      '/src/js/index.js',
      '/src/js/components/ToastAlert.js',
      '/src/js/service-workers/registration.js',
      '/service-worker.js'
    ])
  );
});

this.addEventListener('fetch', function (event) {
  event.respondWith(
    fetchOrReturnCachedAsset(event.request)
  );
});

const openCache = function (name) {
  return caches.open(name);
};

const cacheAssets = function (assets) {
  return openCache('resources')
  .then(cache => cache.addAll(assets))
};

const fetchOrReturnCachedAsset = function (request) {
  return fetch(request)
  .catch(() => caches.match(request));
};
