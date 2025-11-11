
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { firebaseConfig } from './firebaseConfig';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Convenience exported functions (used in pages)
export async function signup(email, password){
  return createUserWithEmailAndPassword(auth, email, password);
}
export async function login(email, password){
  return signInWithEmailAndPassword(auth, email, password);
}
export async function logout(){
  return signOut(auth);
}
