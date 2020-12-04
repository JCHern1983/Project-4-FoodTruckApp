import React from 'react'
import '../../App.css'
import { Card2, TruckButton } from '../../styled-components'


export default function TruckFavs(props, match) {
    const handleChange = e => {
        e.preventDefault();
        console.log(match)
    }
    return (

 <Card2>
            <img className='truckImg' alt='truck' src={props.image}/>
            <div className='truckDetails2'>
            <h1>{props.name}</h1>
            <TruckButton className='truckBtn' onClick={handleChange}>Remove</TruckButton>
            </div>
        </Card2>
    )
}
