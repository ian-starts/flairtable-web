import React, {useEffect} from 'react'
import Head from 'next/head'
import {initGA, logPageView} from '../utils/analytics'

export default (props) => {
    useEffect(() => {
        if (!window.GA_INITIALIZED) {
            initGA();
            window.GA_INITIALIZED = true
        }
        logPageView()
    }, []);
    return (
        <div>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
                <title>{props.title}</title>
                <meta name="title" content={props.title}/>
                <meta name="description"
                      content={"Flairtable | Securely use your Airtable API keys anywhere"}/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://flairtable.com/"/>
                <meta property="og:title" content={props.title}/>
                <meta property="og:description"
                      content={"Flairtable | Securely use your Airtable API keys anywhere!"}/>
                <meta property="og:image" content="https://flairtable.com/assets/images/metatag.jpg"/>

                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://flairtable.com/"/>
                <meta property="twitter:title" content={props.title}/>
                <meta property="twitter:description"
                      content={"Flairtable | Securely use your Airtable API keys anywhere"}/>
                <meta property="twitter:image" content="https://flairtable.com/assets/images/metatag.jpg"/>
            </Head>
            {props.children}
        </div>
    )
}