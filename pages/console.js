import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from '../components/Hero';
import WithProfile from "../hocs/WithProfile";
import firebase from "firebase";
import ConsoleHeader from "../components/ConsoleHeader";
import InfoCard from "../components/InfoCard";

const Console = (props) => {
    const [request, setRequest] = useState(null);
    const [apiKey, setApiKey] = useState("");
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);
    const [copiedBase, setCopiedBase] = useState(false);
    useEffect(() => {
        firebase.database().ref(`tokens/${props.user.uid}`).on('value', (snapshot) => {
            if (snapshot.val()) {
                setApiKey(snapshot.val().airtableToken)
            }
        })
    }, []);
    useEffect(() => {
        firebase.database().ref(`requests/${props.user.uid}`).on('value', (snapshot) => {
            setRequest(snapshot.val());
        })
    }, []);
    return (<div>
            <Layout locale={props.locale} title="Flairtable - Console">
                <ConsoleHeader onSignoutClick={onSignoutClick}/>
                <div className="console-container">
                    <div className="console-inner-container">
                        <h1 className="console--header">
                            Hi! <br/>Welcome to Flairtable.
                        </h1>
                        <div className="my-10">
                            <label className="w-full">
                                <p className="input-label">Your Flairtable API key (use in requests)</p>
                            </label>

                            <input type="text" name="airtable"
                                   id="apiKeyInput"
                                   disabled
                                   value={props.user.uid}
                                   className="form--input"/>
                            <button id="copy" type="button" className="form--submit"
                                    onClick={copyToClipboard(props.user.uid, setCopied)}>Copy<span
                                className={copied ? "done loading" : "done"}
                                aria-hidden="true">Copied</span>
                            </button>

                        </div>
                        <div className="my-10">
                            <label className="w-full">
                                <p className="input-label">Base URL</p>
                            </label>

                            <input type="text" name="airtable"
                                   id="apiKeyInput"
                                   disabled
                                   value={"https://flairtable.com/api/v1"}
                                   className="form--input"/>
                            <button id="copy" type="button" className="form--submit"
                                    onClick={copyToClipboard("https://flairtable.com/api/v1", setCopiedBase)}>Copy<span
                                className={copiedBase ? "done loading" : "done"}
                                aria-hidden="true">Copied</span>
                            </button>

                        </div>
                        <p className="console--content">
                            Enter your api key below to start using Flairtable. Everything works exactly like Airtable,
                            you'll only get a different base URL and API key.
                        </p>
                        {request ?
                            <div className="mt-10 flex flex-row flex-wrap">
                                <InfoCard total={request.total ?? 100} used={request.count}/>
                                <a className="form--submit-checkout"
                                   href={`https://gumroad.com/l/flairtable?uid=${props.user.uid}`} target="_blank"
                                   rel="noopener">Add 100k requests for $12</a>
                            </div> : null}
                        <form className="form" onSubmit={submitHandler(apiKey, setLoading, props.user)}>
                            <div className="w-full">
                                <label>
                                    <p className="input-label">Your Airtable API key</p>
                                </label>
                                <input type="text" placeholder={"Enter your airtable API key"} name="airtable"
                                       value={apiKey}
                                       onChange={(e) => setApiKey(e.target.value)} className="form--input"/>
                                <button className="form--submit" type="submit">Submit<span
                                    className={loading ? "done loading" : "done"}
                                    aria-hidden="true">Updated</span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
            <style jsx>{`
                .form--submit-checkout{
                  @apply bg-custom-red-800 text-white font-bold font-sans whitespace-no-wrap p-3 mt-4 rounded-lg self-center relative;
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
                  @apply flex flex-1 justify-center items-center flex-col mb-20;
                }
                .console--content {
                  @apply text-gray-700 text-lg my-2
                }
                .console-inner-container{
                  @apply max-w-2xl justify-start p-3
                }
                .console--header {
                  @apply text-gray-700 text-2xl my-2;
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
                  @apply ml-5 mt-0; 
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