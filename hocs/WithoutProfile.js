import React, {useEffect, useState} from 'react'
import {useRouter} from "next/router";
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default (Component) => {
    return (props) => {
        const router = useRouter();
        const [loading, setLoading] = useState(true);
        useEffect(() => {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    const urlParams = new URLSearchParams(window.location.search);
                    const redirect = urlParams.get('redirect')
                    if (redirect){
                        window.location.href = redirect + user.uid;
                        return;
                    }
                    router.replace('/console');
                } else {
                    setLoading(false);
                }
            });
        }, []);
        return loading ? <div className="hidden"><Component {...props}/></div> : <Component {...props}/>
    };
}
