import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCevkzS3ZaCGowyc_tVZgrSFlS6ywAHdds',
	authDomain: 'crown-db-82943.firebaseapp.com',
	projectId: 'crown-db-82943',
	storageBucket: 'crown-db-82943.appspot.com',
	messagingSenderId: '633783672750',
	appId: '1:633783672750:web:38b240e84b11b165c0f23f',
	measurementId: 'G-CQ0X4SNGFK',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
