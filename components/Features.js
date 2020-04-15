import React from 'react';
import Link from "next/link";

const Features = (props) => {
    return (
        <div className="flex flex-1 justify-center">
            {/*<div className="feature">*/}
                {/*<h1 className="feature--header">*/}
                {/*    Designed for*/}
                {/*</h1>*/}
                {/*<form className="form" action="/signup">*/}
                {/*    <input type="email" placeholder={"Enter your email"} name="email" className="form--input"/>*/}
                {/*    <button className="form--submit" type="submit">Let's Go</button>*/}
                {/*</form>*/}
            {/*</div>*/}
            <style jsx>{`
              .feature {
                  @apply flex flex-1 flex-row max-w-2xl mt-20;
              }
              .feature--header{
                  @apply font-sans text-3xl font-bold text-gray-700 text-center mt-10 px-2;
              }
              .feature--header-accent{
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

export default Features;