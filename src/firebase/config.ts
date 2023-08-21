import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCR3XGStkkX5ZPZv4JtEwAeQhKOEa7mZAg",
  authDomain: "perduco-law.firebaseapp.com",
  projectId: "perduco-law",
  storageBucket: "perduco-law.appspot.com",
  messagingSenderId: "524113602731",
  appId: "1:524113602731:web:b381c689d20467ffb56fee"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, db, storage };