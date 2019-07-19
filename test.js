
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyAqIqVFq3mWhtXGrLsiGEUudJBYcwLm0Xs',
  authDomain: 'meal-planning-47de5.firebaseio.com',
  projectId: 'meal-planning-47de5'
});

var db = firebase.firestore()

db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});