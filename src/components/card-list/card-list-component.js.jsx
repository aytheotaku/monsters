import React from 'react'
import {Card} from '../card/Card-component.js'
import './card-list-component-styles.css'


export const CardList = (props) =>{
        console.log(props)
        return( 
            <>
            <div className="card-list">
            {props.users.map(user=>(
                <Card key ={user.id} user={user} />
            ))}
            </div>
            </>
        )
}


