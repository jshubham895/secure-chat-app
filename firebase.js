import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCbVbzYe6zbRjqQbx4Xzftaq8_RMRMVPhU",
	authDomain: "chat-app-25205.firebaseapp.com",
	projectId: "chat-app-25205",
	storageBucket: "chat-app-25205.appspot.com",
	messagingSenderId: "226897523158",
	appId: "1:226897523158:web:cffe8d532264b255c0f477",
	measurementId: "G-M4DPWHDMSR"
};

let app;

if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
