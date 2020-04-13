import React, {useEffect, useState} from 'react';
import getClient from "../services/request";
import * as authService from "../services/authService";

export default (props) => {
    const [checked, setChecked] = useState(props.checked);
    const [id, setId] = useState(props.id);
    useEffect(() => {
        setChecked(props.checked);
    }, [props.checked]);
    useEffect(() => {
        setId(props.id);
    }, [props.id]);
    return (
        <div>
            <label className={props.disabled ? "reserve-card_disabled" : "reserve-card"}>
                <input type="checkbox" disabled={props.disabled} className={"reserve-card__checkbox__hidden"}
                       value={checked}
                       onChange={onClick(props, id, setId, checked, setChecked)}/>
                <span
                    className={props.disabled ? "reserve-card__checkbox__disabled" : checked ? "reserve-card__checkbox__checked" : "reserve-card__checkbox"}/>
                <span>{props.startTime.format('HH:mm')} - {props.endTime.format('HH:mm')}</span>
            </label>
            <style jsx>{`
                .reserve-card {
                    @apply text-xs text-gray-600 flex flex-row px-2 py-3 border-gray-600 border rounded self-center items-center my-2 font-sans;
                    transition: all .3s ease,-webkit-all .3s ease
                }
                .reserve-card__checkbox__hidden {
                  @apply absolute opacity-0
                }
                .reserve-card__checkbox{
                  @apply h-4 w-4 border-gray-700 border mr-3 rounded-full;
                  transition: all .3s ease,-webkit-all .3s ease
                }
                .reserve-card__checkbox__disabled{
                   @apply h-4 w-4 border-gray-400 border mr-3 rounded-full;
                }
                .reserve-card__checkbox__checked{
                  @apply h-4 w-4 border-gray-700 border mr-3 rounded-full bg-secondary;
                  transition: all .3s ease,-webkit-all .3s ease
                }
                .reserve-card_disabled {
                   @apply text-xs text-gray-400 flex flex-row px-2 py-3 border-gray-400 border rounded self-center items-center my-2 font-sans;
                }
                .reserve-card:hover{
                  @apply border-gray-900 cursor-pointer;
                  box-shadow: 0 0 2px 2px hsla(0, 0%, 0%, 0),0 0 5px 2px rgba(0, 0, 0, 0.1);
                  transform: translate(0px, -2px);
                }
                @screen sm {
                    .reserve-card_disabled {
                        @apply text-lg;
                    }
                    .reserve-card {
                        @apply text-lg;
                    }
                }
               
             `}</style>
        </div>)
}

const onClick = (props, id, setId, checked, setChecked) => () => {
    if (!checked) {
        getClient(authService.getToken()).post('washingtime', {
            startDateTime: props.startTime.format(),
            endDateTime: props.endTime.format(),
            washerType: props.type
        }).then(resp => {
            setId(resp.data.id);
            setChecked(true)
        }).catch(e => {
            console.log(e);
        })
    } else {
        getClient(authService.getToken()).delete(`washingtime/${id}`).then(resp => {
            setId(null);
            setChecked(false)
        }).catch(e => {
            console.log(e);
        })
    }
};