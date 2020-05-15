import React from 'react'
import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCOmEozkmlxaP6PgATBS3L952e-KRUr7CE",
    authDomain: "vinayan-d0270.firebaseapp.com",
    databaseURL: "https://vinayan-d0270.firebaseio.com",
    projectId: "vinayan-d0270",
    storageBucket: "vinayan-d0270.appspot.com",
    messagingSenderId: "353919072329",
    appId: "1:353919072329:web:7039da4a98a9518b4ba798",
    measurementId: "G-NNV4T5YE2Q"
}
firebase.default.initializeApp(config)
firebase.firestore().settings({
    //timestampsInSnapshots: true
})

export default firebase