import React from 'react';
import Link from "next/link";

const Header = (props) => {
    return (
        <div>
            <div className="header">
                <Link href={'#'}>
                    <a className="flex flex-1">
                        <div
                            className="header--logo">
                            <img alt="logo" src="/assets/images/logo-flairtable.svg" />
                        </div>
                        <h1 className="header--banner">Flairtable</h1>
                    </a>
                </Link>
                <div className="flex flex-1 flex-row justify-end self-center py-2 px-4">
                    <Link href={"#"}><a
                        className="menu--item">Docs</a></Link>
                    <Link href={"#"}><a
                        className="menu--item">Pricing</a></Link>
                    <Link href={"/login"}><a
                        className="menu--item">Sign In</a></Link>
                    <Link href={"/signup"}><a
                        className="menu--item menu--item-accent">Sign Up</a></Link>
                </div>
            </div>
            <style jsx>{`
              .header--banner{
                  @apply text-gray-800 py-5 self-center font-sans text-xl 
              }
              .header--logo{
                  @apply ml-3 self-center mr-1 py-2 flex w-16 h-16;
              }
              .header{
                  @apply top-0 pr-3 bg-custom-white w-full flex flex-row px-5
              }
              .menu--button-cta{
                @apply flex rounded-full px-5 py-2 ml-2 bg-custom-pink;
              }
              .menu--button-cta-text{
                @apply self-center text-gray-100 font-sans font-hairline text-lg
              }
              .menu--item{
                @apply text-gray-600 mx-1 font-sans text-sm transition duration-200 ease-in-out whitespace-no-wrap; 
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
                .header{
                  @apply px-16
                }
                .header--logo{
                    @apply ml-10 mr-5
                }
                .menu--item{
                    @apply mx-5;
                }
              }
              @screen md {
                .header--logo{
                    @apply w-20
                }
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

export default Header;