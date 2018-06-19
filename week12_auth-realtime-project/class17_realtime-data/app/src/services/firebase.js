import firebase from 'firebase';

export const config = {
  apiKey: 'AIzaSyDh-a3I9dQE7iOzsR72AWYUyaphp7AuYos',
  authDomain: 'todo-9ea8e.firebaseapp.com',
  databaseURL: 'https://todo-9ea8e.firebaseio.com',
  projectId: 'todo-9ea8e',
  storageBucket: 'todo-9ea8e.appspot.com',
  messagingSenderId: '45672748538'
};

const firebaseApp = firebase.initializeApp(config);

// the real-time database
export const db = firebaseApp.database(); 

// the firebase storage adjunct for images
export const storage = firebase.storage();

// the firebase auth namespace
export const auth = firebaseApp.auth(); 

// auth providers, used in signin
export const providers = firebase.auth;