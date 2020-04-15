import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from '../components/Hero';
import WithProfile from "../hocs/WithProfile";
import firebase from "firebase";

const Console = (props) => {
    const [reservations, setReservations] = useState([]);
    useEffect(() => {
        firebase.auth().signOut();
    }, []);
    return (<div>
            <Layout locale={props.locale} title="Flairtable - Airtable for your frontend">
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
export default WithProfile(Console);