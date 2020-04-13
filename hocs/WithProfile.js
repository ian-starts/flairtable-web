import React, {useEffect, useState} from 'react'
import {useRouter} from "next/router";
import * as authService from '../services/authService';

export default (Component) => {
    return (props) => {
        const router = useRouter();
        const [loading, setLoading] = useState(true);
        useEffect(() => {
            if (!authService.isLoggedIn()) {
                router.replace('/login')
            } else {
                setLoading(false);
            }
        });
        return loading ? <div/> : <Component {...props}/>
    };
}
