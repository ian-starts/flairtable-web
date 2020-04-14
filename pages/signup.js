import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import SignIn from "../components/SignIn";

const Signup = (props) => {
    const [email, setEmail] = useState("");
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        setEmail(urlParams.get('email'));
    }, []);
    return (<Layout locale={props.locale} title="Flairtable - Login">
            <main>
                <SignIn email={email} type={"Sign up"}/>
            </main>
        </Layout>
    )
};
export default Signup;
