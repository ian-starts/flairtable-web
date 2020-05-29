import React from 'react';
import Link from "next/link";

const InfoCard = (props) => {
    return (
        <div className="flex mx-4">
            <div className="info-card">
                <div className="header--container">
                    <p className="info-card--header">{props.unit}</p>
                </div>
                <div className="content--container">
                    <h1 className="info-card--content">
                        {props.used.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        {props.total? ` / ${props.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}` : ''}</h1>
                </div>
            </div>
            <style jsx>{`
              .info-card {             
                @apply rounded-lg shadow min-w-10;
              }
              .content--container{
                @apply p-5
              }
              .header--container{
                @apply bg-gray-200 rounded-t-lg p-5
              }
              .info-card--header {
                @apply text-gray-600 italic;
              }
              .info-card--content {
                @apply text-gray-800 text-3xl truncate;
              }
            `}</style>
        </div>
    )
};

export default InfoCard;