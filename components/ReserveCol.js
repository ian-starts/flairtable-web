import React, { useEffect, useState } from 'react';
import ReserveCard from "./ReserveCard";
import moment from "moment";
import * as authService from "../services/authService";

export default (props) => {
    const [timeRange, setTimeRange] = useState(createTimeRange(props.day));
    const [profile] = useState(authService.getProfile(authService.getToken()));
    return (
        <div className="reserve-col">
            <h3 className={"reserve-col__header"}>
                {props.day.format("dddd MMM Do")}
            </h3>
            <div className={"reserve-col__washer-type"}>
                <div className={"washer-type__col"}>
                    <h3 className={"washer-type__header"}>
                        Washer
                    </h3>
                    {timeRange.slice(0, -1).map((range, i) => {
                        let reservation = props.reservation.find(r => {
                            return moment(r.startDateTime + "+00:00").valueOf() === range.valueOf() && r.washerType === 'Washer'
                        });
                        return <ReserveCard key={i} date={props.day} startTime={range}
                            type={"Washer"}
                            id={reservation?.id}
                            checked={reservation?.userId === profile.user_id}
                            disabled={reservation && reservation?.userId !== profile.user_id}
                            endTime={timeRange[i + 1]} />
                    })}
                </div>
                <div className={"washer-type__col"}>
                    <h3 className={"washer-type__header"}>
                        Dryer
                    </h3>
                    {timeRange.slice(0, -1).map((range, i) => {
                        let reservation = props.reservation.find(r => {
                            return moment(r.startDateTime+"+00:00").valueOf() === range.valueOf() && r.washerType === 'Dryer'
                        });
                        return <ReserveCard key={i} date={props.day} startTime={range}
                            type={"Dryer"}
                            id={reservation?.id}
                            checked={reservation?.userId === profile.user_id}
                            disabled={reservation && reservation?.userId !== profile.user_id}
                            endTime={timeRange[i + 1]} />
                    })}
                </div>
            </div>
            <style jsx>{`
                .washer-type__col{
                    @apply mx-1
                }
                .reserve-col__washer-type{
                    @apply flex flex-row
                }
                .reserve-col {
                    @apply flex flex-col px-2 py-3 bg-white rounded-lg mt-10 mx-2
                }
                .reserve-col__header{
                  @apply text-center text-xl p-3 text-gray-800 text-tertiary font-sans;
                  color: #e86ed0;
                }
                .washer-type__header{
                  @apply text-center text-lg py-1 text-tertiary font-sans;
                }
                @screen sm {
                    .reserve-col{
                        @apply px-4 mx-3
                    }
                }
             `}</style>
        </div>)
}
const createTimeRange = (date) => {
    date.hours(6).minutes(45).seconds(0).millisecond(0);
    return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(i => {
        return moment(date.add(75, 'm'));
    });
};

