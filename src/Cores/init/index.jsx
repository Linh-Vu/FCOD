import firebase from 'firebase';
const init = () => {
	const config = {
		apiKey: "AIzaSyCvU1Ut6MNFyRiNKyN1ortXwM3HzX8FcNE",
		authDomain: "fcod-115df.firebaseapp.com",
		databaseURL: "https://fcod-115df.firebaseio.com",
		projectId: "fcod-115df",
		storageBucket: "",
		messagingSenderId: "624112534658"
	};
	return firebase.initializeApp(config);
};

export default init;