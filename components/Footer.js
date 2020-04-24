import React from 'react';
import Link from "next/link";

const Footer = (props) => {
    return (
        <div className="py-2 my-10">
            <div className="footer">
                <div className="footer--items">
                    <a className="footer--item" href="mailto:hello@iankok.com">Contact</a>
                    <a className="footer--item" target="_blank" rel="noopener" href="https://twitter.com/starts_ian">Twitter</a>
                    <a className="footer--item" target="_blank" rel="noopener" href="https://docs.flairtable.com">Docs</a>
                </div>
            </div>
            <style jsx>{`
                  .footer{
                    @apply flex flex-1 flex-row justify-center
                  }
                  .footer--items{
                    @apply flex flex-1 justify-center
                  }
                  .footer--item{
                    @apply text-gray-500 mx-5 font-bold font-sans
                  }
                  @screen md {
                       
                  }
                  @screen lg {
                      .footer--item{
                        @apply text-lg
                      }
                  }
                  @screen xl {
                      .footer--item{
                        @apply text-lg
                      }   
                  }
            `}</style>
        </div>
    )
};

export default Footer