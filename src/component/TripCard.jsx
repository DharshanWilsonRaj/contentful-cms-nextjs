import Image from 'next/image'
import React from 'react'
import './TripCard.css'
import Link from 'next/link';
const TripCard = ({ data }) => {   
    return (
        <Link className="trip_card_container text-decoration-none" href={`/trips/${data?.sys?.id}`}>
            <div className="card" style={{ width: '100%' }}>
                <Image
                    src={`https:${data?.fields?.thumbnail?.fields?.file?.url}`}
                    alt="thumbnail"
                    width={200}
                    height={150}
                    className="card-img-top"
                    style={{ objectFit: "cover" }}
                />
                <div className="card-body">
                    <h5 className="card-title text-capitalize">{data?.fields?.title}</h5>
                    <p className="card-text">{data?.fields?.brief}</p>
                </div>
            </div>
        </Link>
    )
}

export default TripCard
