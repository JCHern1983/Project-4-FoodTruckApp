import React from 'react'
// import { DinerContext } from '../../Contexts/DinerContext'
// import {useHistory} from 'react-router-dom'
// import axiosWithAuth from '../axiosWithAuth'
// import TruckFavs from './TruckFavs'
import '../../App.css'
import { Card2, TruckButton } from '../../styled-components'


export default function TruckCard(props) {

    console.log(props)
    // const {push} = useHistory();


const handleChange = e => {
    e.preventDefault();
}


    return (
        <>
        <Card2>
            <img className='truckImg' alt='truck' src={props.image}/>
            <div className='truckDetails2'>
            <h1>{props.name}</h1>
            <TruckButton className='truckBtn' onClick={handleChange}>Add to Favorites</TruckButton>
            </div>
        </Card2>
        </>
    )
}
