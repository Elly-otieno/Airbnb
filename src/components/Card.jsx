import React from 'react'
import starLogo from "../assets/images/star.svg"

function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if(props.location == 'online') {
        badgeText = 'ONLINE'
    }

    console.log(props)

  return (
    <div className='card'>
        {badgeText && <div className='spot'>{badgeText}</div>}
        <img src={props.image} alt="" className='image-logo'/>
        <div className="content-rating">
            <img src={starLogo} alt="" className='star'/>
            <p className="rating">{props.stats.rating} 
                <span> ({props.stats.reviewCount}) . {props.country}</span>
            </p>
        </div>
        <p className="card-text">{props.title}</p>
        <p className="price-text"><strong>From ${props.price} </strong> / person</p>
    </div>
  )
}

export default Card