import firebase from 'firebase'
import 'firebase/firestore'

// Firebase init goes here
const config = {
    apiKey: "AIzaSyCjvwH0a49fbi0jJxyu0Ls6Xghc0TH3joU",
    authDomain: "vue-firebase-4c2db.firebaseapp.com",
    databaseURL: "https://vue-firebase-4c2db.firebaseio.com",
    projectId: "vue-firebase-4c2db",
    storageBucket: "vue-firebase-4c2db.appspot.com",
    messagingSenderId: "610204686552"
}
firebase.initializeApp(config)

// Firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// Date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// Firebase collections
const userCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likeCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    userCollection,
    postsCollection,
    commentsCollection,
    likeCollection
}