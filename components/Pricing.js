import React from 'react';
import Link from "next/link";
import InfoCard from "./InfoCard";

const Pricing = (props) => {
    return (
        <div className="text-center mb-20">
            <div className="flex justify-center my-10">
                <div className="pricing-card">
                    <h1 className="pricing-header">
                        Start using an easy, secure and simple <br/>database experience.
                    </h1>
                    <div className="flex flex-row">
                        <div className="my-3 flex justify-center">
                            <a className="buy-button"
                               href={props.user ? `https://gumroad.com/l/flairtable?uid=${props.user.uid}` : '/signup'}
                               target="_blank"
                               rel="noopener">{props.user ? "Buy $12" : "Sign Up"}</a>
                        </div>
                        <div className="flex flex-1 justify-end ml-2 mb-5">
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
              .buy-button{
                  @apply bg-custom-red-800 text-white font-bold font-sans whitespace-no-wrap p-3 rounded-lg self-center relative;
                  transition: transform .3s ease-out,-webkit-transform .3s ease-out, background-color .3s ease-out,-webkit-transform .3s ease-out;
                }
                .buy-button:hover {
                @apply bg-custom-red;
                transform: scale(1.05);
              }
              .list-item--header{
                @apply leading-none font-light text-gray-900 text-sm
              }
              .list-item--content{
                @apply leading-none font-medium text-gray-900
              }
              .feature-list{
                @apply leading-none text-left flex flex-col mx-3;
              }
              .feature-list--item{
                @apply py-2
              } 
              .pricing-header {
                @apply text-2xl text-gray-900 py-2 font-bold leading-tight text-left
              }
              .pricing-card{
                @apply bg-custom-orange-500 py-8 rounded-lg px-4
              }
              .pricing-card--header{
                @apply text-3xl text-gray-800 px-10
              }
              @screen sm {
                  .pricing-card{
                      @apply py-8 px-16
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