import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import WithProfile from "../hocs/WithProfile";
import firebase from "firebase";
import ConsoleHeader from "../components/ConsoleHeader";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";

const Auth = (props) => {
    const [users, setUsers] = useState([]);
    const [lastObject, setLastObject] = useState(null);
    const [next, setNext] = useState(() => {
    });
    useEffect(() => {
        const first = firebase.firestore().collection('users')
            .where('flairtableUserId', '==', props.user.uid)
            .orderBy('email')
            .limit(25);
        first.onSnapshot((snapshot) => {
            setLastObject(snapshot.docs[snapshot.docs.length - 1])
            if (snapshot.docs) {
                setUsers(snapshot.docs.map((item) => item.data()));
            }
        })
    }, []);
    return (<div>
            <Layout locale={props.locale} title="Flairtable - Console | Auth">
                <Sidebar active={'auth'}/>
                <main className="console">
                    <ConsoleHeader onSignoutClick={onSignoutClick}/>
                    <div className="console-container">
                        <h1 className="console--header">
                            Auth
                        </h1>
                        <Table data={users} nextFunction={null}/>
                    </div>
                </main>
            </Layout>
            <style jsx>{`
            .console--header {
            @apply text-gray-700 text-4xl mt-2 mb-5;
           }
          .console{
            margin-left: 17rem; 
          }
           .console-container {
            @apply flex flex-1 justify-start items-start flex-col mb-20 px-8;
           }
           @screen sm {}
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
export default WithProfile(Auth);