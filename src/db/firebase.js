import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const env = import.meta.env;

//Configuramos la base con la info de la consola de fireBase
const firerbaseConfig = {
  apiKey: env.VITE_API_KEY,
  authDomain: env.VITE_AUTH_DOMAIN,
  projectId: env.VITE_PROJECT_ID,
  storageBucket: env.VITE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_MESSAGING_SENDER_ID,
  appId: env.VITE_APP_ID,
};
//Inicializamos Firebase
const app = initializeApp(firerbaseConfig);

//Inicializamos Firestore
export const db = getFirestore(app);

//console.log("Conexion Establecida con Firebase: ", db);
