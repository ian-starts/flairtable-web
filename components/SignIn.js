import React, {useEffect} from 'react';
import firebase from "firebase";
import {useRouter} from "next/router";

export default (props) => {
    const router = useRouter();
    useEffect(() => {
        firebase.auth().getRedirectResult().then(function (result) {
            let user = result.user;
            if (user) {
                router.push('/');
                user.getIdToken().then(
                    t => {
                        window.localStorage.setItem('idToken', t);
                    }
                );
            }
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log(errorCode, errorMessage, email, credential)
        });
    }, []);
    return (
        <div className="signin--container">
            <form>
                <button
                    className="button"
                    onClick={onGoogleClick(router)}
                    id="login-button"
                >
                        <span className="button__text">
                            Login with Google
                        </span>
                </button>
                <button
                    className="button"
                    onClick={onFacebookClick(router)}
                    id="login-button"
                >
                        <span className="button__text">
                            Login with Facebook
                        </span>
                </button>
            </form>
            <style jsx>{`
                .signin__header {
                    @apply text-5xl text-gray-600 underline mb-10 font-sans;
                }
                .signin--container{
                    @apply flex flex-1 items-center mt-20 flex-col font-bold;
                }
                .button{
                    @apply rounded-full px-5 py-2 bg-primary m-2;
                    background-color: #e86ed0;
                }
                .button__text {
                    @apply text-lg text-white font-sans;
                }
             `}</style>
        </div>)
}

const onGoogleClick = (router) => (e) => {
    e.preventDefault();
    let provider = new firebase.auth.GoogleAuthProvider();
    signInHandler(provider, router)

};
const onFacebookClick = (router) => (e) => {
    e.preventDefault();
    let provider = new firebase.auth.FacebookAuthProvider();
    signInHandler(provider, router)

};

const signInHandler = (provider, router) => {
    firebase.auth().signInWithRedirect(provider);
};

