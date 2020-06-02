import React, {useState} from 'react';
import Link from "next/link";

const Pricing = (props) => {
    return (
        <div className="text-center mt-20 mb-20">
            <h1 className="pricing-header">
                Start using an easy, secure and simple <br/>back end experience.
            </h1>
            <div className="pricing-cards">
                <div className="pricing-card">
                    <h1 className="pricing-card__header">
                        FREE
                    </h1>
                    <div className="pricing-card__innner" style={{marginTop: '3.25rem'}}>
                        <ul className="feature-list">
                            <li className={"feature-list--item"}>
                                <h4 className="list-item--header">USERS</h4>
                                <p className="list-item--content">5</p>
                            </li>
                            <li className={"feature-list--item"}>
                                <h4 className="list-item--header">REQUESTS</h4>
                                <p className="list-item--content"><span className="text-xl">∞</span>
                                    <div className="tooltip">(fair use)<span className="tooltip--text">
                                        10K requests a month. <br/> If you go over twice, we'll send you an email to update your plan.
                                </span></div>
                                </p>
                            </li>
                            <li className={"feature-list--item"}>
                                <h4 className="list-item--header">RECORDS</h4>
                                <p className="list-item--content"><span className="text-xl">∞</span></p>
                            </li>
                        </ul>
                        <Link href="/signup"><a className="buy-button">{`Try Flairtable`}</a>
                        </Link>
                    </div>
                </div>
                <div className="pricing-card">
                    <div className="pricing-card__innner">
                        <h1 className="pricing-card__header">
                            $2.50<span className="text-sm">/month</span>
                        </h1>
                        <h1 className="pricing-card__subheader">
                            Billed $30 per year
                        </h1>
                        <ul className="feature-list">
                            <li className={"feature-list--item"}>
                                <h4 className="list-item--header">USERS</h4>
                                <p className="list-item--content"><span className="text-xl">∞</span></p>
                            </li>
                            <li className={"feature-list--item"}>
                                <h4 className="list-item--header">REQUESTS</h4>
                                <p className="list-item--content"><span className="text-xl">∞</span>
                                    <div className="tooltip">(fair use)<span className="tooltip--text">
                                        50K requests a month. <br/>If you go over: no problem, we'll reach out to discuss new pricing.
                                    </span></div>
                                </p>
                            </li>
                            <li className={"feature-list--item"}>
                                <h4 className="list-item--header">RECORDS</h4>
                                <p className="list-item--content"><span className="text-xl">∞</span></p>
                            </li>
                            <li className={"feature-list--item"}>
                                <h4 className="list-item--header">SUPPORT</h4>
                                <p className="list-item--content">Priority</p>
                            </li>
                        </ul>
                        <a className="buy-button"
                           href={(() => {
                               if (props.user) {
                                   return `https://gumroad.com/l/flairtable-baas?uid=${props.user.uid}`;
                               }
                               return `/signup?redirect=${encodeURI('https://gumroad.com/l/flairtable-baas?uid=')}`
                           })()}
                           target="_blank"
                           rel="noopener">{`Buy Flairtable`}</a>
                    </div>
                </div>
            </div>
            <style jsx>{`
              .tooltip {
                  position: relative;
                  display: inline-block;
                  border-bottom: 1px dotted black;
                }
                .tooltip .tooltip--text {
                  visibility: hidden;
                  width: 180px;
                  background-color: black;
                  color: #fff;
                  text-align: center;
                  border-radius: 6px;
                  padding: 0.6rem;
                
                  /* Position the tooltip */
                  position: absolute;
                  z-index: 1;
                  bottom: 100%;
                  left: 50%;
                  margin-left: -90px;
                  margin-bottom: 0.3rem;
                }
                
                .tooltip:hover .tooltip--text {
                  visibility: visible;
                }
              .pricing-card__innner {
                @apply flex flex-1 flex-col;
                max-width: 13rem;
               }
              .reserve-card {
                    @apply text-xs text-gray-900 flex flex-row pl-1 flex-1; 
                    @apply items-center my-2 font-sans font-bold;
                    transition: all .3s ease,-webkit-all .3s ease;
                }
                .pricing-cards{
                @apply flex flex-1 flex-row items-center justify-center mt-10 flex-wrap;
               }
               .pricing-card{
                @apply flex flex-col bg-custom-orange-500 pb-16 pt-12 rounded-lg mx-5 px-16 my-5 shadow flex-1;
                min-width: 14rem;
                max-width: 22rem;
                height: 38rem
               } 
              .reserve-card__checkbox__hidden {
                  @apply px-3
                }
              .buy-button{
                  @apply bg-custom-red-800 text-white text-center justify-center font-bold font-sans whitespace-no-wrap py-3 rounded-lg self-center flex w-full;
                  transition: transform .3s ease-out,-webkit-transform .3s ease-out, background-color .3s ease-out,-webkit-transform .3s ease-out;
                }
                .buy-button:hover {
                @apply bg-custom-red;
                transform: scale(1.05);
              }
              .list-item--header{
                @apply leading-normal font-bold text-gray-900 text-base whitespace-no-wrap
              }
              .list-item--content{
                @apply leading-none font-medium text-gray-900 text-sm
              }
              .feature-list{
                @apply leading-none text-left ml-1 my-10 flex flex-1 flex-col text-xl;
              }
              .feature-list--item{
                @apply pb-4
              } 
              .pricing-header {
                @apply text-2xl pt-2 font-bold leading-tight text-center;
              }
              .pricing-card__header {
                @apply text-5xl pt-2 font-bold leading-tight text-center;
               color: rgb(80,67,35);
              }
              .pricing-card__subheader{
                @apply text-xl pt-6 font-normal leading-tight text-center;
               color: rgb(80,67,35);
              }
              .reserve-card:hover{
                @apply cursor-pointer;
                transform: scale(1.05);
              }   
              
              @screen sm {
                 
                   .reserve-card__checkbox{
                      @apply mr-3;
                    }
                    .reserve-card{
                      @apply text-base;
                    }
                     .reserve-card__checkbox__checked{
                      @apply mr-3;
                    }
                    .buy-button{
                      @apply py-4
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