import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
        apiKey: "AIzaSyA_BWS0eEWA3OQEiw9Xmughptymi7B_uoM",
        authDomain: "ecom-db-5536d.firebaseapp.com",
        projectId: "ecom-db-5536d",
        storageBucket: "ecom-db-5536d.appspot.com",
        messagingSenderId: "588931992182",
        appId: "1:588931992182:web:0f2200b39a3c7d39166d57",
        measurementId: "G-90GSPBCEFR"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if(!userAuth) return;

        const userRef = firestore.doc(`user/${userAuth.uid}`);

        const snapShot = await userRef.get();
        // daca user -ul nu exista se creaza unul nou 
        if(!snapShot.exists){
           const { displayName, email } = userAuth;
           const createdAt = new Date();

           try{
             await userRef.set({
                     displayName,
                     email,
                     createdAt,
                     ...additionalData

             })
           } catch (error){
                   console.log('error creating user', error.message);
           }
        }

        return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;