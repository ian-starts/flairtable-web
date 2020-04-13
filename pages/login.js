import React from 'react';
import Layout from "../components/Layout";
import SignIn from "../components/SignIn";

const Home = (props) => {
    return (<Layout locale={props.locale} title="#WannaWash?">
            <main>
                <SignIn/>
            </main>
        </Layout>
    )
};
export default Home;
