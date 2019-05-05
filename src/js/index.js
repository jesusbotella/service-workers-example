import registerServiceWorker from './service-workers/registration.js';
import toastAlert from './components/ToastAlert.js';

window.addEventListener('load', function () {
  registerServiceWorker();

  if (!navigator.onLine) {
    createOfflineNotification();
  }

  window.addEventListener('offline', () => {
    createOfflineNotification();
  });
});

function createOfflineNotification() {
  toastAlert.showNotification(
    'Oops! Seems like you are offline. Please check your internet connection.'
  );
}
