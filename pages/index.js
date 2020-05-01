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
                <div className="fixed right-0 bottom-0 mr-6 mb-6 hidden sm:block">
                    <a href="https://www.producthunt.com/posts/flairtable?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-flairtable"
                       target="_blank"><img
                        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=196559&theme=light"
                        alt="Flairtable - Frontend safe Airtable. Secure and scope your API key. | Product Hunt Embed"
                        style={{width: '250px', height: '54px'}} width="250px" height="54px"/></a>
                </div>

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