firebase.initializeApp({
  apiKey: "AIzaSyAZPfHLw3LykNWEADQnD6_6id4_JlNx9EU",
  authDomain: "ein-notification.firebaseapp.com",
  projectId: "ein-notification",
  storageBucket: "ein-notification.firebasestorage.app",
  messagingSenderId: "305257928700",
  appId: "1:305257928700:web:37516dcab0724fea700479",
  measurementId: "G-WD4Y0Z2SPD"
});

const messaging = firebase.messaging();

function enableNotifications() {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      messaging.getToken({
        vapidKey: "BJQ45sojMBuP8mXasbMFfJuZGv1IR556BvgR1RbuWiFIuk8R-RThoV364BJYhB3jacrH-p5miWvR2GcB2BEL4vg"
      }).then(token => {
        console.log("FCM TOKEN:", token);

        // Google Analytics event
        if (typeof gtag === "function") {
          gtag('event', 'notification_allowed', {
            event_category: 'Push',
            event_label: 'User Enabled'
          });
        }
      });
    }
  });
}
