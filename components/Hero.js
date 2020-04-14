import React from 'react';
import Link from "next/link";

const Hero = (props) => {
    return (
        <div className="flex flex-1 justify-center">
            <div className="hero">
                <h1 className="hero--header">
                    <span className="hero--header-accent">Secure</span> and <span
                    className="hero--header-accent">scope</span> your Airtable API key to directly use it in your
                    frontend or client.
                </h1>
                <form className="form" action="/signup">
                    <input type="email" placeholder={"Enter your email"} name="email" className="form--input"/>
                    <button className="form--submit" type="submit">Let's Go</button>
                </form>
            </div>
            <style jsx>{`
              .hero {
                  @apply flex flex-1 flex-col max-w-2xl mt-20;
              }
              .hero--header{
                  @apply font-sans text-3xl font-bold text-gray-700 text-center mt-10 px-2;
              }
              .hero--header-accent{
                @apply text-custom-hard-pink
              }
              .form {
                @apply self-center mt-12 w-full px-10 flex flex-row mx-10;
              }
              .form--input{
                @apply px-3 py-2 bg-gray-300 rounded w-full font-sans;
              }
              .form--submit {
                @apply bg-custom-blue text-white font-bold font-sans whitespace-no-wrap p-3 ml-5 rounded-lg;
                transition: transform .3s ease-out,-webkit-transform .3s ease-out;
              }
              .form--submit:hover{
                transform: scale(1.05);
              }
              @screen sm {
                .form{
                  @apply px-20
                }
              }
              @screen md {
                
              }
            `}</style>
        </div>
    )
};

export default Hero;