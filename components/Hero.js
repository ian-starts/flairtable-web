import React from 'react';
import Link from "next/link";

const Hero = (props) => {
    return (
        <div className="flex flex-1 justify-center">
            <div className="hero">
                <div className="hero--text">
                    <h1 className="hero--header">
                        <span className="hero--header-accent">Quickly</span> build a web app <br/> using <span
                        className="hero--header-accent">Airtable</span> as a data source.
                    </h1>
                    <h2 className="hero--subheader">
                        Flairtable adds <span className="hero--header-accent">user accounts</span> and a <span
                        className="hero--header-accent">database</span> to your frontend. It uses <span
                        className="hero--header-accent">Airtable</span> to persist your data. No more backends, just a
                        simple Javascript SDK and API.
                    </h2>
                </div>
                <form className="form" action="/signup">
                    <input type="email" placeholder={"Enter your email"} name="email" className="form--input"/>
                    <button className="form--submit" type="submit">Let's Go</button>
                </form>
            </div>
            <style jsx>{`
              .hero--text{
                @apply flex flex-col content-center
              }
              .hero {
                  @apply flex flex-1 flex-col mt-20 mb-16;
                  max-width: 60rem;
              }
              .hero--header{
                  @apply font-sans text-3xl font-bold text-gray-700 text-center mt-2 px-5 leading-none;
              }
              .hero--subheader{
                  @apply font-sans text-xl text-gray-700 text-center mt-10 px-4 leading-snug; 
              }
              .hero--header-accent{
                @apply text-custom-orange
              }
              .form {
                @apply self-center mt-12 w-full px-10 flex flex-row mx-10 flex-wrap justify-center;
              }
              .form--input{
                @apply px-3 py-2 bg-gray-300 rounded w-full font-sans max-w-sm;
              }
              .form--submit {
                @apply bg-custom-blue text-white font-bold font-sans whitespace-no-wrap p-3 mt-4 rounded-lg self-center;
                transition: transform .3s ease-out,-webkit-transform .3s ease-out;
              }
              .form--submit:hover{
                transform: scale(1.05);
              }
              @screen sm {
                .form{
                  @apply px-20
                }
                .form--submit{
                  @apply ml-5 mt-0;
                }
                .hero--header{
                  @apply text-4xl mt-10;
                }
                .hero--subheader{
                  @apply text-2xl;
                }
                .form--input{
                  @apply px-5 py-4 flex-1 flex;
                }
                .form--submit {
                  @apply px-10 py-4;
                  }
                }
              @screen md {
                
              }
            `}</style>
        </div>
    )
};

export default Hero;