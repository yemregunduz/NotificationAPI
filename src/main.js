import defaultNotification from './models/defaultNotification.js';

const getNotificationPermission = async () => {
  if (!window.Notification) return null;
  const permission = await Notification.requestPermission();
  return permission;
};

const createNotification = async (title, options) => {
  const permission = await getNotificationPermission();
  if (permission != 'granted') return null;

  return new Notification(title, options);
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
    if (!notification) {
      showNotificationPermissionHelper();
      return;
    }
    notification.addEventListener('click', () => {
      window.open(redirectUrl);
    });
  });
};

const showNotificationPermissionHelper = () => {
  console.log(window.innerWidth);
  const notificationPermissionHelper = document.querySelector(
    '.permission-location-helper'
  );

  notificationPermissionHelper.classList.add('show');
  setTimeout(
    () => {
      notificationPermissionHelper.classList.remove('show');
    },
    window.innerWidth < 768 ? 1000 : 2500
  );
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
