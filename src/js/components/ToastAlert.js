class ToastAlert {
  constructor() {
    this.notificationsNode = this.injectBaseNode();
  }

  injectBaseNode () {
    document.body.insertAdjacentHTML(
      'beforeend',
      '<section class="notifications"></section>'
    );

    return document.querySelector('.notifications');
  }

  showNotification (message, options = { timeToDelete: 3000 }) {
    this.notificationsNode.insertAdjacentHTML('afterbegin', `
      <div class="notification__item">${message}</div>
    `)

    if (options.timeToDelete) {
      const notification = document.querySelector('.notification__item');
      setTimeout(() => notification.remove(), options.timeToDelete);
    }
  }
}

export default new ToastAlert();
