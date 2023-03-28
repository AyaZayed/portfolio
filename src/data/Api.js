import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBWPDfutOm5JQn2ssgMTuQbqtHQ4xZs7XI",
    authDomain: "portfolio-projects-29d3b.firebaseapp.com",
    projectId: "portfolio-projects-29d3b",
    storageBucket: "portfolio-projects-29d3b.appspot.com",
    messagingSenderId: "247937071762",
    appId: "1:247937071762:web:471bfd9cf6ac59d07e844b",
    measurementId: "G-5VBHTBYZCY",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db }