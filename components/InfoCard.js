import React from 'react';
import Link from "next/link";

const InfoCard = (props) => {
    return (
        <div className="flex">
            <div className="info-card">
                <p className="info-card--header">Requests</p>
                <h1 className="info-card--content">{props.used.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} / {props.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
            </div>
            <style jsx>{`
              .info-card {             
                @apply bg-custom-blue-200 p-3 rounded
              }
              .info-card--header {
                @apply text-gray-600 italic font-thin;
              }
              .info-card--content {
                @apply text-gray-700 text-4xl;
              }
            `}</style>
        </div>
    )
};

export default InfoCard;