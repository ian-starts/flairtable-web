import React, {useState} from 'react';
import Link from "next/link";

const ConsoleHeader = (props) => {
    return (
        <div>
            <div className="header">
                <div className="flex flex-1 flex-row justify-end self-center pt-1 px-4">
                    <a href="https://docs.flairtable.com" target="_blank" rel="noopener" className="menu--item">Docs</a>
                    {props.withConsole ? <Link href={"/console"}><a
                        className="menu--item">Console</a></Link> : null}
                    <a className="menu--item menu--item-accent" onClick={props.onSignoutClick} href={'#'}>Sign Out</a>
                </div>
            </div>

            <style jsx>{`
                .hamburger-menu--item{
                  @apply w-screen bg-gray-600 text-white min-h-5 text-center m-auto flex justify-center items-center font-sans;
                }
                .hamburger-menu--item-accent {
                @apply bg-blue-700
                }
                .header--banner{
                @apply text-gray-700 py-5 font-bold self-center font-sans text-xl
                }
                .header--logo{
                @apply ml-3 self-center mr-1 py-2 flex w-16 h-16;
                }
                .header{
                  @apply top-0 bg-custom-white w-full flex flex-row
                }
                .menu--button-cta{
                @apply flex rounded-full px-5 py-2 ml-2 bg-custom-pink;
                }
                .menu--button-cta-text{
                @apply self-center text-gray-100 font-sans font-hairline text-lg
                }
                .menu--item{
                  @apply text-gray-600 mx-1 font-bold font-sans transition duration-200 ease-in-out whitespace-no-wrap;
                }
                .menu--item-accent{
                  @apply text-blue-500 transition duration-200 ease-in-out;
                }
                .menu--item:hover{
                  @apply text-gray-800;
                }
                .menu--item-accent:hover{
                  @apply text-blue-700;
                }
                @screen sm {
                .header--logo{
                @apply ml-10 mr-5
                }
                .menu--item{
                @apply mx-5;
                }
                }
                @screen md {
                .header--banner{
                @apply text-3xl
                }
                .menu--item{
                @apply text-xl
                }
                .menu--button-cta-text{
                @apply text-xl
                }
                .menu--button-cta{
                @apply ml-5
                }
                }
                `}</style>
        </div>
    )
};

export default ConsoleHeader;