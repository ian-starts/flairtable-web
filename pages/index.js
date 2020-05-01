import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from '../components/Hero';
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import firebase from "firebase";
import ConsoleHeader from "../components/ConsoleHeader";
import Footer from "../components/Footer";

const Home = (props) => {
    const [user, setUser] = useState(null);
    const [ref, setRef] = useState("");
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        setRef(urlParams.get('ref'));
    }, []);
    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    }, []);
    return (<div>
            <Layout locale={props.locale} title="Flairtable - Airtable for your frontend">
                {user ? <ConsoleHeader onSignoutClick={onSignoutClick} withConsole={true}/> : <Header/>}
                <Hero/>
                <Features/>
                <section id={"pricing"}/>
                <Pricing discount={ref} user={user}/>
                <Footer/>
            </Layout>
            <style jsx>{`
                .reserve-row__block {
                    @apply flex flex-1 justify-center self-center flex-wrap;
                }
                .heading{
                    @apply text-2xl text-gray-600 text-center font-sans;
                }
                @screen sm {
                    .heading{
                        @apply text-5xl;
                    }
                }
             `}</style>
        </div>
    )
};
const onSignoutClick = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
}
export default Home;