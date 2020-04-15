import React, {useEffect, useState} from 'react'
import {useRouter} from "next/router";
import firebase from "firebase";

export default (Component) => {
    return (props) => {
        const router = useRouter();
        const [loading, setLoading] = useState(true);
        useEffect(() => {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    setLoading(false);
                } else {
                    router.replace('/');
                }
            });
        },[]);
        return loading ? <div/> : <Component {...props}/>
    };
}
