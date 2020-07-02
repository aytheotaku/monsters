import React from 'react'
import './card.style.css'

export const Card = (props) =>{
        console.log(props)
        return( 
            <>
            <div className="card-container">
            <img alt="robot" src={`https://robohash.org/${props.user.id}?set=set2&size=180x180`}></img>
            <h2>{props.user.name}</h2>
            </div>
            </>
        )
}


