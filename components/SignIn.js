import React, {useEffect, useState} from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {useRouter} from "next/router";
import Google from "../svgs/logo-google.svg";
import Github from "../svgs/logo-github.svg";

export default (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState(props.email ?? "");
    const [password, setPassword] = useState("");

    useEffect(() => {
        setEmail(props.email ?? "");
    }, [props.email]);

    return (
        <div className="signin--container">
            <div className="flex flex-1">
                <div
                    className="signin--logo">
                    <img alt="logo" src="/assets/images/logo-flairtable.svg"/>
                </div>
                <h1 className="signin--banner">Flairtable</h1>
            </div>
            <form onSubmit={props.type === "Sign in" ? onEmailNameAndPasswordSignInClick(email, password, setLoading) :
                onEmailNameAndPasswordSignUpClick(email, password, setLoading)}>
                <div className="signin--email">
                    <input type="email" placeholder={"Enter your email"} name="email" className="form--input" required
                           onChange={(e) => setEmail(e.target.value)}
                           value={email}/>
                    <input type="password" placeholder={"Enter your Password"} name="password" className="form--input"
                           required
                           onChange={(e) => setPassword(e.target.value)}
                           value={password}/>
                    <div>
                        <button
                            className="email--button"
                            id="login-button"
                            type="submit"
                        >
                            {loading ? <div className="flex flex-row">
                                    <div className="loader mr-3"/>
                                    <span className="button__text">
                            {props.type}
                        </span></div> :
                                <span className="button__text">
                            {props.type}
                        </span>}
                        </button>
                    </div>
                </div>
                <div className="signin--providers">
                    <button
                        className="button"
                        onClick={onGoogleClick(router)}
                        id="login-button"
                    >
                        <Google className="self-center mr-4"/>
                        <span className="button__text">
                            {`${props.type} with Google`}
                        </span>
                    </button>
                    <button
                        className="button"
                        onClick={onGithubClick(router)}
                        id="login-button"
                    >
                        <Github className="self-center mr-4"/>
                        <span className="button__text">
                            {`${props.type} with Github`}
                        </span>
                    </button>
                </div>
            </form>
            <style jsx>{`
              .signin--banner{
                  @apply text-gray-800 py-5 self-center font-sans text-lg font-medium
              }
              .signin--logo{
                  @apply ml-3 self-center mr-4 py-2 flex w-16 h-16;
              }
                .signin__header {
                    @apply text-5xl text-gray-600 underline mb-10 font-sans;
                }
                .signin--container{
                    @apply flex flex-1 items-center mt-4 flex-col font-bold;
                }
                .signin--email{
                  @apply flex flex-1 flex-col p-10 bg-blue-100 mb-10;
                }
                .button{
                    @apply rounded-full px-5 py-2 m-2 border-gray-700 border flex flex-1 flex-row justify-center;
                }
                .button__text {
                    @apply text-lg text-gray-800 font-sans whitespace-no-wrap;
                }
                .email--button{
                    @apply rounded-full px-5 py-2 my-3 bg-custom-orange;
                }
                .form--input{
                  @apply px-3 py-2 bg-gray-300 rounded w-full my-2 font-sans;
                }
                .signin--providers{
                  @apply flex flex-1 flex-row flex-wrap
                }
                @screen sm {
                  .signin--container{
                    @apply mt-20;
                  }
                }
             `}</style>
        </div>)
}

const onGoogleClick = (router) => (e) => {
    e.preventDefault();
    let provider = new firebase.auth.GoogleAuthProvider();
    signInHandler(provider, router)

};
const onGithubClick = (router) => (e) => {
    e.preventDefault();
    let provider = new firebase.auth.GithubAuthProvider();
    signInHandler(provider, router)

};
const onEmailNameAndPasswordSignInClick = (email, password, setLoading) => (e) => {
    setLoading(true);
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        setLoading(false);
        alert(errorMessage);
        // ...
    });

};

const onEmailNameAndPasswordSignUpClick = (email, password, setLoading) => (e) => {
    setLoading(true);
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        setLoading(false);
        alert(errorMessage);
        // ...
    });
};

const signInHandler = (provider, router) => {
    firebase.auth().signInWithRedirect(provider);
};

