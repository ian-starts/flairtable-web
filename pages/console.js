import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import WithProfile from "../hocs/WithProfile";
import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/auth';
import ConsoleHeader from "../components/ConsoleHeader";
import InfoCard from "../components/InfoCard";
import Sidebar from "../components/Sidebar";

const Console = (props) => {
    const [request, setRequest] = useState(null);
    useEffect(() => {
        firebase.database().ref(`requests/${props.user.uid}`).on('value', (snapshot) => {
            setRequest(snapshot.val());
        })
    }, []);
    return (<div>
            <Layout locale={props.locale} title="Flairtable - Console">
                <div className="flex flex-row">
                    <Sidebar active={'overview'}/>
                    <main className="console">
                        <ConsoleHeader onSignoutClick={onSignoutClick}/>
                        <div className="console-container">
                            <div className="console-inner-container">
                                <h1 className="console--header">
                                    Overview
                                </h1>
                                { request ? request.payingUser === true ? null :
                                <h2 className="console--subheader">
                                    You account is limited to 5 users. <a
                                    className="link"
                                    target="_blank" rel="noopener"
                                    href={`https://gumroad.com/l/flairtable-baas?uid=${props.user.uid}`}>Upgrade
                                    now</a> to remove that limit.
                                </h2>: null }
                                {request ?
                                    <div className="mt-10 flex flex-row flex-wrap" style={{marginLeft: '-1rem'}}>
                                        <InfoCard total={request.payingUser ? 50000 : 10000} used={request.count}
                                                  unit="Requests"/>
                                        <InfoCard used={request.users ?? 0} total={request.payingUser ? '∞' : 5}
                                                  unit="Users"/>
                                    </div> : null}
                            </div>
                        </div>
                    </main>
                </div>
            </Layout>
            <style jsx>{`
          .console{
            @apply overflow-y-auto w-screen h-screen;
          }
           .reserve-card {
                @apply text-sm text-gray-900 flex flex-row pl-1; 
                @apply items-center my-2 font-sans font-bold;
                transition: all .3s ease,-webkit-all .3s ease;
            }
           .reserve-card__checkbox__hidden {
           @apply absolute opacity-0
           }
           .reserve-card__checkbox{
           @apply h-4 w-4 border-white border mr-1 rounded-full;
           transition: all .3s ease,-webkit-all .3s ease
           }
           .reserve-card__checkbox__checked{
           @apply h-4 w-4 border-white border mr-1 rounded-full bg-white;
           transition: all .3s ease,-webkit-all .3s ease
           }
           .form--submit-checkout{
           @apply bg-custom-red-800 text-white font-bold font-sans whitespace-no-wrap p-3 rounded-lg flex;
           transition: all .3s ease-out,-webkit-transform .3s ease-out;
           }
           .done {
           position: absolute;
           left: 0; top: 0; right: 0;
           text-align: center;
           opacity: 0;
           transform: translateY(-1em);
           color: #000;
           transition: all .500s;
           }
           .loading {
           opacity: 1;
           transform: translateY(-2em);
           }
           .console-container {
           @apply flex flex-1 justify-start items-start flex-col mb-20;
           }
           .console--content {
           @apply text-gray-700 text-lg my-2
           }
           .console-inner-container{
           @apply max-w-2xl justify-start p-1 px-8
           }
           .console--header {
           @apply text-gray-700 text-4xl my-2;
           }
           .console--subheader {
            @apply text-gray-700 text-lg text-red-500;
           }
           .link {
            @apply underline font-bold;
           }
           .link :hover{
            @apply text-red-600
           }
           .form {
           @apply mt-12 w-full flex flex-row;
           }
           .form--input{
           @apply px-3 py-3 bg-gray-300 rounded w-full font-sans max-w-sm;
           }
           .input-label{
           @apply text-gray-700 text-lg font-sans w-full
           }
           .form--submit {
           @apply bg-custom-blue text-white font-bold font-sans whitespace-no-wrap p-3 mt-4 rounded-lg self-end relative;
           transition: transform .3s ease-out,-webkit-transform .3s ease-out;
           }
           .form--submit-checkout:hover {
           @apply bg-custom-red;
           transform: scale(1.05);
           }
           @screen sm {
           .form{
           @apply justify-start self-start content-start
           }
           .form--submit{
           @apply ml-5 mt-0;
           }
           .form--submit-checkout{
           @apply mt-0;
           }
           .reserve-card__checkbox{
           @apply mr-3;
           }
           .reserve-card__checkbox__checked{
           @apply mr-3;
           }
           .buy-button{
           @apply mr-5
           }
           }
           `}</style>
        </div>
    )
};
const onSignoutClick = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
}
const submitHandler = (apiKey, setLoading, user) => (e) => {
    e.preventDefault();
    firebase.database().ref(`/tokens/${user.uid}`).set({
        airtableToken: apiKey,
    }).then((function () {
        // Handle Errors here.
        setLoading(true);
        let temp = setInterval(function () {
            setLoading(false);
            clearInterval(temp);
        }, 600);
        // ...
    }));
};

const copyToClipboard = (apiKey, setCopied) => (e) => {
    e.preventDefault();
    let textArea = document.createElement("textarea");
    textArea.value = apiKey;
    document.body.appendChild(textArea);
    textArea.select();
    if (document.execCommand('copy')) {
        textArea.remove();
        setCopied(true);
        let temp = setInterval(function () {
            setCopied(false);
            clearInterval(temp);
        }, 600);
    } else {
        console.info('document.execCommand went wrong…')
    }
}
export default WithProfile(Console);