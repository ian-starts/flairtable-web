import React from 'react';
import Layout from "../components/Layout";
import SignIn from "../components/SignIn";

const Login = (props) => {
    return (<Layout locale={props.locale} title="Flairtable - Login">
            <main>
                <SignIn type={"Sign in"}/>
            </main>
        </Layout>
    )
};
export default Login;
