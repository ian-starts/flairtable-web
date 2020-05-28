import React, {useEffect, useState} from 'react'
import {useRouter} from "next/router";
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default (Component) => {
    return (props) => {
        const router = useRouter();
        const [loading, setLoading] = useState(true);
        const [user, setUser] = useState({});
        useEffect(() => {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    setUser(user);
                    setLoading(false);
                } else {
                    router.replace('/');
                }
            });
        },[]);
        return loading ? <div/> : <Component user={user} {...props}/>
    };
}
