import React from "react";


export default function Travel(props){
    //console.log(props)
    return(
        <div className="list--card">
            <div className="list--img"> 
            <img src={`./images/${props.thumbnailImg}`}  alt=""/>
            </div>
            <div className="list--text">
                <span className="list--location">
                <img src={`./images/pin.png`}  alt=""/> {props.country}
                </span>
                <span className="map--link"><a href={`${props.maplink}`} title="">View on Google Maps</a> </span>
                <h2>{props.title}</h2>
                <p className="date">{props.start_date} - {props.end_date}</p>
                <p>{props.description}</p>
            </div>
        </div>

    )
}