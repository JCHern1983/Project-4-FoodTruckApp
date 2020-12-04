import React, {useContext, useState} from 'react'
import { DinerContext } from '../../Contexts/DinerContext'
import TruckCard from '../Diner/TruckCard'
import Dinerheader from '../Headers/Dinerheader'
import '../../App.css'
import { OperatorBody} from '../../styled-components'
import TruckFavs from './TruckFavs'

export default function DinerDash() {
    const [dinerTrucks] = useContext(DinerContext)
    console.log(dinerTrucks)

    const [favorites] =useState([
        {
        name: 'Carlos Truck',
        image: 'https://rb.gy/dpd8hu',
        id: Date.now() + Math.random(),
        },
        {
            name: 'Juans Truck',
            image: 'https://rb.gy/nly5ri',
            id: Date.now() + Math.random(),
        }
    ]);
console.log(favorites)


    return (
        <>
        <div>
        <Dinerheader/>
        <OperatorBody>
        <h1>Favorite Trucks:</h1>
        <div className='truckCard2'>
        {favorites.map(item =>{
            return(
                <TruckFavs
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                
                />
            )
        })}
        
        </div>

        <h1>All Trucks:</h1>
        <div className='truckCard2'>
        {dinerTrucks.map(truck => {
            return(
                <TruckCard
                name={truck.truckName}
                key={truck.id}
                id={truck.id}
                image={truck.imgOfTruck}
                />
            )
        })}
        </div>
        </OperatorBody>
        </div>

        </>
    )
}
