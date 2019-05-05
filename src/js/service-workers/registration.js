export default function registerServiceWorker () {
  if (!'serviceWorker' in navigator) {
    console.warn('Service Workers are not supported in this browser');
    return Promise.reject('Service Workers are not supported in this browser');
  }

  return navigator.serviceWorker.register('/service-worker.js')
  .catch(err => console.log('Service Worker registration failed: ', err));
}
