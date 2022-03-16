import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAhS1nSiRFFKV3ejoDf9jS7Urc--q73brA',
  authDomain: 'fir-demo-5a707.firebaseapp.com',
  databaseURL: 'https://fir-demo-5a707-default-rtdb.firebaseio.com',
  projectId: 'fir-demo-5a707',
  storageBucket: 'fir-demo-5a707.appspot.com',
  messagingSenderId: '90656263543',
  appId: '1:90656263543:web:93ff08e8fb9545ee5da572',
};

const app = initializeApp(firebaseConfig);
const messageRef = ref(getDatabase(app), 'messages');

export const pushMessage = ({ name, text }) => {
  push(messageRef, { name, text });
};
