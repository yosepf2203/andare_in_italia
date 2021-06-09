// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD-NnxtbIAQt4x7Bel7MhLkbMOPmMapOGI",
    authDomain: "andare-in-italia.firebaseapp.com",
    projectId: "andare-in-italia",
    storageBucket: "andare-in-italia.appspot.com",
    messagingSenderId: "630688740428",
    appId: "1:630688740428:web:37c71f8c9c85e446bb30e9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();