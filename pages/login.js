import React from 'react';
import Layout from "../components/Layout";
import SignIn from "../components/SignIn";
import WithoutProfile from "../hocs/WithoutProfile";

const Login = (props) => {
    return (<Layout locale={props.locale} title="Flairtable - Login">
            <main>
                <SignIn type={"Sign in"}/>
            </main>
        </Layout>
    )
};
export default WithoutProfile(Login)
