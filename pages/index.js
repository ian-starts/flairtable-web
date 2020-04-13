import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import WithProfile from "../hocs/WithProfile";
import getClient from "../services/request";
import * as authService from '../services/authService';
import ReserveRow from "../components/ReserveCol";
import moment from "moment";

const Home = (props) => {
    const [reservations, setReservations] = useState([]);
    useEffect(() => {
        getClient(authService.getToken()).get(`washingtime?page[size]=10000&filter[dateGte]=${moment().startOf('d').toISOString()}`).then(resp => {
            setReservations(resp.data.data);
        })
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