import firebase from "firebase";
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAcwTew1qZZeskmUSL-GLK6k4WnAU70tHA",
    authDomain: "netflix-clone-rugg.firebaseapp.com",
    databaseURL: "https://console.firebase.google.com/u/1/project/netflix-clone-rugg/authentication/users",
    projectId: "netflix-clone-rugg",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth()

export { db, auth }
//export default db;