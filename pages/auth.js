import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import WithProfile from "../hocs/WithProfile";
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import ConsoleHeader from "../components/ConsoleHeader";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";

const Auth = (props) => {
    const [users, setUsers] = useState([]);
    const [lastObject, setLastObject] = useState(null);
    const [firstObject, setFirstObject] = useState(null);
    const [response, setResponse] = useState([]);
    const [next, setNext] = useState(null);
    const [previous, setPrevious] = useState(null);
    const [search, setSearch] = useState(null);
    const debouncedSearch = useDebounce(search, 200);
    const [request, setRequest] = useState(null);
    useEffect(() => {
        firebase.database().ref(`requests/${props.user.uid}`).on('value', (snapshot) => {
            setRequest(snapshot.val());
        })
    }, []);
    useEffect(() => {
        if (search) {
            const first = firebase.firestore().collection('users')
                .where('flairtableUserId', '==', props.user.uid)
                .orderBy('email')
                .startAt(debouncedSearch).endAt(debouncedSearch + '\uf8ff')
                .limit(25);
            first.onSnapshot((snapshot) => {
                setLastObject(snapshot.docs[snapshot.docs.length - 1])
                setResponse(snapshot.docs);
                if (snapshot.docs) {
                    setUsers(snapshot.docs.map((item) => ({...item.data(), firebaseId: item.id})));
                }
            })
            return;
        }
        const first = firebase.firestore().collection('users')
            .where('flairtableUserId', '==', props.user.uid)
            .orderBy('email')
            .limit(25);
        first.onSnapshot((snapshot) => {
            setLastObject(snapshot.docs[snapshot.docs.length - 1])
            setResponse(snapshot.docs);
            if (snapshot.docs) {
                setUsers(snapshot.docs.map((item) => ({...item.data(), firebaseId: item.id})));
            }
        })
    }, [debouncedSearch])
    useEffect(() => {
        if (lastObject) {
            const func = {
                nextFunction: () => {
                    if (response > 25) {
                        setFirstObject(response[0]);
                        const first = firebase.firestore().collection('users')
                            .where('flairtableUserId', '==', props.user.uid)
                            .orderBy('email')
                            .startAfter(lastObject)
                            .limit(25);
                        first.onSnapshot((snapshot) => {
                            setLastObject(snapshot.docs[snapshot.docs.length - 1])
                            if (snapshot.docs) {
                                setResponse(snapshot.docs);
                                setUsers(snapshot.docs.map((item) => ({...item.data(), firebaseId: item.id})));
                            }
                        })
                    }
                }
            }
            setNext(func);
        }
    }, [lastObject, response])
    useEffect(() => {
        if (lastObject) {
            const func = {
                prevFunction: () => {
                    setFirstObject(response[0]);
                    const first = firebase.firestore().collection('users')
                        .where('flairtableUserId', '==', props.user.uid)
                        .orderBy('email')
                        .startAt(firstObject)
                        .limit(25);
                    first.onSnapshot((snapshot) => {
                        setLastObject(snapshot.docs[snapshot.docs.length - 1])
                        if (snapshot.docs) {
                            setResponse(snapshot.docs);
                            setUsers(snapshot.docs.map((item) => ({...item.data(), firebaseId: item.id})));
                        }
                    })
                }
            }
            setPrevious(func);
        }
    }, [response])
    return (<div>
            <Layout locale={props.locale} title="Flairtable - Console | Auth">
                <div className="flex flex-row">
                    <Sidebar active={'auth'}/>
                    <main className="console">
                        <ConsoleHeader onSignoutClick={onSignoutClick}/>
                        <div className="console-container">
                            <h1 className="console--header">
                                Auth
                            </h1>
                            { request ? request.payingUser === true ? null :
                                <h2 className="console--subheader">
                                    You account is limited to 5 users. <a
                                    className="link"
                                    target="_blank" rel="noopener"
                                    href={`https://gumroad.com/l/flairtable-baas?uid=${props.user.uid}`}>Upgrade
                                    now</a> to remove that limit.
                                </h2>: null }
                            <Table data={users} nextFunction={next} onDelete={getOnDeleteClick} previousFunction={previous} onSearch={setSearch}/>
                        </div>
                    </main>
                </div>
            </Layout>
            <style jsx>{`
            .console--header {
            @apply text-gray-700 text-4xl my-2;
           }
           .console--subheader {
            @apply text-gray-700 text-lg text-red-500 mb-10;
           }
           .link {
            @apply underline font-bold;
           }
           .link :hover{
            @apply text-red-600
           }
          .console{
            @apply overflow-y-auto w-screen h-screen;
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

const getOnDeleteClick = (itemId) => (e) => {
    firebase.firestore().collection('users').doc(itemId).delete();
}
function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
        () => {
            // Update debounced value after delay
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);
            // Cancel the timeout if value changes (also on delay change or unmount)
            // This is how we prevent debounced value from updating if value is changed ..
            // .. within the delay period. Timeout gets cleared and restarted.
            return () => {
                clearTimeout(handler);
            };
        },
        [value, delay] // Only re-call effect if value or delay changes
    );
    return debouncedValue;
}

export default WithProfile(Auth);