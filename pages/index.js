import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import WithProfile from "../hocs/WithProfile";
import * as authService from '../services/authService';

const Home = (props) => {
    const [reservations, setReservations] = useState([]);
    useEffect(() => {

    }, []);
    return (<div>
            <Layout locale={props.locale} title="Flairtable">

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
export default WithProfile(Home);