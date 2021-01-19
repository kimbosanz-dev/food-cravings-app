import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDh1MuHSScLLEug6dxBmJmHTorGdkBGy-Q',
    authDomain: 'food-cravings-db.firebaseapp.com',
    projectId: 'food-cravings-db',
    storageBucket: 'food-cravings-db.appspot.com',
    messagingSenderId: '463842488597',
    appId: '1:463842488597:web:18cd1ae3c3d24f3d34b91c',
    measurementId: 'G-6VEDP0ZWFC'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firebaseFireStore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            })
        } catch (error) {
            console.log('Error creating User');
        }

    }

    return userRef;
}

firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();
export const firebaseFireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => firebaseAuth.signInWithPopup(provider);

export default firebase;