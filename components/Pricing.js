import React, {useEffect, useState} from 'react';
import Link from "next/link";
import InfoCard from "./InfoCard";

const Pricing = (props) => {
    const [recurringChecked, setRecurringChecked] = useState(false);
    const [discount, setDiscount] = useState(props.discount ?? "");

    useEffect(() => {
        setDiscount(props.discount ?? "");
    }, [props.discount]);

    return (
        <div className="text-center mb-20">
            <div className="flex justify-center my-10">
                <div className="pricing-card">
                    <h1 className="pricing-header">
                        Start using an easy, secure and simple <br/>database experience.
                    </h1>
                    <div className="flex flex-row">
                        <div className="my-3 flex justify-center flex-row flex-wrap-reverse">
                            <a className="buy-button"
                               href={(() => {
                                   if (props.user) {
                                       if (recurringChecked) {
                                           if (discount){
                                               return `https://gumroad.com/l/flairtable-recurring/producthunt?uid=${props.user.uid}`;
                                           }
                                           return `https://gumroad.com/l/flairtable-recurring?uid=${props.user.uid}`;
                                       }
                                       if (discount){
                                           return `https://gumroad.com/l/flairtable/producthunt?uid=${props.user.uid}`;
                                       }
                                       return `https://gumroad.com/l/flairtable?uid=${props.user.uid}`
                                   }
                                   if (recurringChecked) {
                                       if (discount){
                                           return `/signup?redirect=${encodeURI('https://gumroad.com/l/flairtable-recurring/producthunt?uid=')}`
                                       }
                                       return `/signup?redirect=${encodeURI('https://gumroad.com/l/flairtable-recurring?uid=')}`
                                   }
                                   if (discount){
                                       return `/signup?redirect=${encodeURI('https://gumroad.com/l/flairtable-recurring/producthunt?uid=')}`
                                   }
                                   return `/signup?redirect=${encodeURI('https://gumroad.com/l/flairtable/producthunt?uid=')}`
                               })()}
                               target="_blank"
                               rel="noopener">Buy {discount ? <span className="relative">$12<span className="absolute w-full border-t-2 border-red-900 left-0" style={{top: '50%'}}/></span>: null} {discount? '$8': '$12'}</a>
                            <label className="reserve-card">
                                <input type="checkbox" className={"reserve-card__checkbox__hidden"}
                                       value={recurringChecked}
                                       onChange={(e) => setRecurringChecked(recurringChecked === false)}/>
                                <span
                                    className={recurringChecked ? "reserve-card__checkbox__checked" : "reserve-card__checkbox"}/>
                                <span className="whitespace-no-wrap">Yearly Recurring</span>
                            </label>
                        </div>
                        <div className="flex flex-1 justify-end sm:ml-2 mb-5 sm:pr-3 mt-3 sm:mt-0">
                            <ul className="feature-list">
                                <li className={"feature-list--item"}>
                                    <h4 className="list-item--header">ALWAYS FREE</h4>
                                    <p className="list-item--content">500 Requests</p>
                                </li>
                                <li className={"feature-list--item"}>
                                    <h4 className="list-item--header">REQUESTS</h4>
                                    <p className="list-item--content">100K</p>
                                </li>
                            </ul>
                            <ul className="feature-list">
                                <li className={"feature-list--item"}>
                                    <h4 className="list-item--header">VALIDITY</h4>
                                    <p className="list-item--content">1 Year</p>
                                </li>
                                <li className={"feature-list--item"}>
                                    <h4 className="list-item--header">COSTS</h4>
                                    <p className="list-item--content">$12</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
              .reserve-card {
                    @apply text-xs text-white flex flex-row px-2 py-3 rounded-lg self-center; 
                    @apply items-center my-2 font-sans bg-custom-blue font-bold;
                    transition: all .3s ease,-webkit-all .3s ease
                }
              .reserve-card__checkbox__hidden {
                  @apply absolute opacity-0
                }
                .reserve-card__checkbox{
                  @apply h-4 w-4 border-white border mr-1 rounded-full;
                  transition: all .3s ease,-webkit-all .3s ease
                }
                 .reserve-card__checkbox__checked{
                  @apply h-4 w-4 border-white border mr-1 rounded-full bg-white;
                  transition: all .3s ease,-webkit-all .3s ease
                }
              .buy-button{
                  @apply bg-custom-red-800 text-white font-bold font-sans whitespace-no-wrap p-3 rounded-lg self-center relative mr-0;
                  transition: transform .3s ease-out,-webkit-transform .3s ease-out, background-color .3s ease-out,-webkit-transform .3s ease-out;
                }
                .buy-button:hover {
                @apply bg-custom-red;
                transform: scale(1.05);
              }
              .list-item--header{
                @apply leading-tight font-bold text-gray-900 text-xs whitespace-no-wrap
              }
              .list-item--content{
                @apply leading-none font-medium text-gray-900 text-xs
              }
              .feature-list{
                @apply leading-none text-left flex flex-col mx-2;
              }
              .feature-list--item{
                @apply pb-4
              } 
              .pricing-header {
                @apply text-2xl pt-2 font-bold leading-tight text-left;
                color: rgb(80,67,35);
              }
              .pricing-card{
                @apply bg-custom-orange-500 py-6 rounded-lg pl-2
              }
              .pricing-card--header{
                @apply text-3xl text-gray-800 px-10
              }
              .reserve-card:hover{
                @apply cursor-pointer;
                transform: scale(1.05);
              }   
              
              @screen sm {
                  .feature-list{
                    @apply mx-4
                  }
                  .pricing-card{
                      @apply  px-16
                   }
                   .list-item--content{
                      @apply text-sm
                   }
                   .list-item--header{
                    @apply text-sm leading-normal
                   }
                   .reserve-card__checkbox{
                      @apply mr-3;
                    }
                    .reserve-card{
                      @apply text-base px-8 py-4;
                    }
                     .reserve-card__checkbox__checked{
                      @apply mr-3;
                    }
                    .buy-button{
                      @apply mr-5 px-8 py-4
                    }
              }
              @screen md {
                .pricing-header{
                  @apply text-4xl
                }
              }
            `}</style>
        </div>
    )
};

export default Pricing;