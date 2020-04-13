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
            <Layout locale={props.locale} title="#WannaWash?">
                <main className="flex flex-1 justify-center flex-col my-10">
                    <h1 className={"heading"}>
                        {`Hi ${authService.getProfile(authService.getToken()).name}!`}
                    </h1>
                    <h1 className={"heading"}>
                        Reserve here 👚
                    </h1>
                    <div className={"reserve-row__block"}>
                        <ReserveRow day={moment()} reservation={reservations.filter(res => {
                            return moment(res.startDateTime).startOf('d').valueOf() === moment().startOf('d').valueOf()
                        })}/>
                        <ReserveRow day={moment().add(1, 'd')} reservation={reservations.filter(res => {
                            return moment(res.startDateTime).startOf('d').valueOf() === moment().startOf('d').add(1, 'd').valueOf()
                        })}/>
                        <ReserveRow day={moment().add(2, 'd')} reservation={reservations.filter(res => {
                            return moment(res.startDateTime).startOf('d').valueOf() === moment().startOf('d').add(2, 'd').valueOf()
                        })}/>
                        <ReserveRow day={moment().add(3, 'd')} reservation={reservations.filter(res => {
                            return moment(res.startDateTime).startOf('d').valueOf() === moment().startOf('d').add(3, 'd').valueOf()
                        })}/>
                        <ReserveRow day={moment().add(4, 'd')} reservation={reservations.filter(res => {
                            return moment(res.startDateTime).startOf('d').valueOf() === moment().startOf('d').add(4, 'd').valueOf()
                        })}/>
                    </div>
                </main>
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