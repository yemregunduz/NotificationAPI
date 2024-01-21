import defaultNotification from './models/defaultNotification.js';

const getNotificationPermission = () => {
  return new Promise((resolve) => {
    if ('Notification' in window) {
      if (Notification.permission !== 'granted') {
        Notification.requestPermission().then((permission) => {
          resolve(permission);
        });
      } else {
        resolve('granted');
      }
    } else {
      resolve(null);
    }
  });
};

const createNotification = (title, options) => {
  return new Promise(async (resolve) => {
    const permission = await getNotificationPermission();

    if (permission === 'granted') {
      const notification = new Notification(title, options);
      resolve(notification);
    }
  });
};

const handleNotificationFormSubmit = () => {
  const title = getInputValue('title', defaultNotification.title);
  const body = getInputValue('body', defaultNotification.body);
  const redirectUrl = formatUrl(
    getInputValue('redirectUrl', defaultNotification.redirectUrl)
  );

  const imageFile = document.getElementById('image').files[0];
  const iconFile = document.getElementById('icon').files[0];

  const options = {
    body: body,
    icon: iconFile ? URL.createObjectURL(iconFile) : defaultNotification.icon,
    image: imageFile
      ? URL.createObjectURL(imageFile)
      : defaultNotification.image
  };

  createNotification(title, options).then((notification) => {
    notification.addEventListener('click', () => {
      window.open(redirectUrl);
    });
  });
};

const formatUrl = (url) => {
  if (!url.startsWith('http')) {
    url = 'http://' + url;
  }
  return url;
};

const getInputValue = (id, defaultValue) => {
  const input = document.getElementById(id);
  return input?.value?.length > 0 ? input.value : defaultValue;
};

document
  .querySelector('#notificationForm .submit-button')
  .addEventListener('click', handleNotificationFormSubmit);
