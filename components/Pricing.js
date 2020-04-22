import React from 'react';
import Link from "next/link";
import InfoCard from "./InfoCard";

const Pricing = (props) => {
    return (
        <div className="text-center mb-10">
            <h1 className="pricing-header">
                Start using an easy, secure and simple <br/>database experience
            </h1>
            <div className="flex justify-center my-10">
                <div className="pricing-card">
                    <h2 className="pricing-card--header">$12</h2>
                    <ul className="feature-list">
                        <li className={"feature-list--item"}>
                            <h4 className="list-item--header">ALWAYS FREE</h4>
                            <p className="list-item--content">500 Requests</p>
                        </li>
                        <li className={"feature-list--item"}>
                            <h4 className="list-item--header">REQUESTS</h4>
                            <p className="list-item--content">100K</p>
                        </li>
                        <li className={"feature-list--item"}>
                            <h4 className="list-item--header">VALIDITY</h4>
                            <p className="list-item--content">1 Year</p>
                        </li>
                    </ul>
                    <div className="my-3 flex justify-center">
                        <a className="buy-button"
                           href={props.user ? `https://gumroad.com/l/flairtable?uid=${props.user.uid}` : '/signup'}
                           target="_blank"
                           rel="noopener">{props.user ? "Buy Now": "Sign Up"}</a>
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
                @apply leading-none text-left py-2;
              }
              .feature-list--item{
                @apply py-2
              } 
              .pricing-header {
                @apply text-2xl text-gray-700 px-10 font-bold leading-tight
              }
              .pricing-card{
                @apply bg-custom-orange-500 py-3 rounded px-10
              }
              .pricing-card--header{
                @apply text-3xl text-gray-800 px-10
              }
              @screen sm {
                
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