import React from 'react';
import Link from "next/link";

const Features = (props) => {
    return (
        <div className="flex flex-1 content-center items-center flex-col">
            <div className="feature feature--reverse">
                <div className="feature--video my-2 mx-4 shadow-lg">
                    <div>
                        <picture>
                            {/*<source srcSet="/assets/images/features-sdk.png" type="image/webp"/>*/}
                            <source srcSet="/assets/images/features-sdk.png" type="image/png"/>
                            <img className="image" alt="feature-sdk"
                                 src="/assets/images/features-sdk.png"/>
                        </picture>
                    </div>
                </div>
                <div className="max-w-full md:max-w-28 my-2 sm:pl-5">
                    <h1 className="feature--header">
                        Build MVP's insanely fast with the simple Javascript SDK.
                    </h1>
                    <p className="feature--description">
                        You don't need a backend, or a database for that matter. Directly plug Flairtable into your
                        frontend and you're ready to go. Flairtable handles hosting, security and scalability.
                    </p>
                </div>
            </div>
            <div className="feature">
                <div className="max-w-full md:max-w-28 my-2">
                    <h1 className="feature--header">
                        Build reactive apps, with Airtable as a datasource.
                    </h1>
                    <p className="feature--description">
                        Use the beautifully designed and user friendly interface of Airtable to structure your data.
                        Flairtable makes sure you can use that data safely in your frontend.
                    </p>
                </div>
                <div className="feature--video my-2 mx-4 shadow-lg">
                    <div>
                        <video muted={true} autoPlay={true}
                               preload={"metadata"} loop="loop">
                            <source src="https://f002.backblazeb2.com/file/Flairtable-videos/flairtable.mp4"
                                    type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
            <div className="max-w-full md:max-w-32 my-2">
                <h1 className="feature--header__list">
                    When should you use Flairtable?
                </h1>
                <ul className="feature--description__list">
                    <li>If you don't want to think about databases.</li>
                    <li>If you need user management but don't want to make it.</li>
                    <li>If you love Airtable but also love your own design.</li>
                    <li>If you want to secure your Airtable data.</li>
                    <li>And if (like me) you love simple things.</li>
                </ul>
            </div>
            <style jsx>{`
              .feature {
                  @apply flex flex-1 flex-row mt-20 mb-20 flex-wrap mx-5;
                  max-width: 75rem;
              }
              .feature--header__list{
                @apply font-sans text-3xl font-bold text-gray-800 text-left mt-10 px-2;
              }
              .feature--reverse {
                 @apply flex-wrap-reverse;
              }
              .feature--description__list {
                @apply text-gray-700 px-2 py-1 mt-2 text-center font-sans list-disc ml-4 text-left text-xl;
                line-height: 1.7;
              }
              .feature--header{
                  @apply font-sans text-xl font-bold text-gray-800 text-center mt-10 px-2;
              }
              .feature--video{
                  @apply flex flex-1 justify-center self-center;
                  min-width: 18rem;
              }
              .feature--description {
                @apply text-gray-700 px-2 py-1 mt-2 text-center font-sans;
                line-height: 1.7;
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
                    @apply text-left;
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