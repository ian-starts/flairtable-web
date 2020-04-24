import React from 'react';
import Link from "next/link";

const Features = (props) => {
    return (
        <div className="flex flex-1 justify-center">
            <div className="feature">
                <div className="max-w-full md:max-w-28 my-2">
                    <h1 className="feature--header">
                        Safely build reactive apps, with Airtable as a datasource.
                    </h1>
                    <p className="feature--description">
                        Storing your Airtable API key in your frontend or client is unsafe. Everyone will have complete
                        control over your base, and worst case: over your Airtable account. Flairtable fixes that.
                    </p>
                </div>
                <div className="feature--video my-2 mx-4 shadow-lg">
                    <div>
                        <video muted={true} autoPlay={true}
                               preload={"metadata"} loop="loop">
                            <source src="https://f002.backblazeb2.com/file/Flairtable-videos/flairtable.mp4" type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
            <style jsx>{`
              .feature {
                  @apply flex flex-1 flex-row mt-20 max-w-5xl mb-20 flex-wrap mx-5;
              }
              .feature--header{
                  @apply font-sans text-lg font-bold text-gray-700 text-center mt-10 px-2;
              }
              .feature--video{
                  @apply flex flex-1 justify-center self-center
              }
              .feature--description {
                @apply text-gray-700 px-2 py-1 mt-2 text-center font-sans;
              }
              @screen sm {
                 
              }
              @screen md {
                .feature--header{
                  @apply text-left;
                  }
                  .feature--video{
                      @apply justify-end
                  }
                  .feature--description {
                    @apply text-left
                  }
              }
              @screen lg {
                .feature--header{
                  @apply text-2xl;
                  }
                  .feature--description {
                    @apply text-lg
                  }
              }
            `}</style>
        </div>
    )
};

export default Features;