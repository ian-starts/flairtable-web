import React from 'react'
import '../styles.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
    apiKey: "AIzaSyDlR9tAwGBy1-9uMmrF6_ZmXxXHS3QZxzg",
    authDomain: "flairtable.firebaseapp.com",
    databaseURL: "https://flairtable.firebaseio.com",
    projectId: "flairtable",
    storageBucket: "flairtable.appspot.com",
    messagingSenderId: "231250477705",
    appId: "1:231250477705:web:1bbac460ed9b4c010bbc58"
};
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({Component, pageProps}) {
    if (!firebase.apps.length) {
        firebase.initializeApp(config)
    }
    return <Component {...pageProps} />
}