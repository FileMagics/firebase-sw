importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAZPfHLw3LykNWEADQnD6_6id4_JlNx9EU",
  authDomain: "ein-notification.firebaseapp.com",
  projectId: "ein-notification",
  storageBucket: "ein-notification.firebasestorage.app",
  messagingSenderId: "305257928700",
  appId: "1:305257928700:web:37516dcab0724fea700479"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: payload.notification.icon || 'https://earthinsidernews.blogspot.com/favicon.ico'
    }
  );
});
