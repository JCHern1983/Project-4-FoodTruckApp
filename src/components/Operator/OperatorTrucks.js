import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../axiosWithAuth'
import OpTruckCard from './OpTruckCard'
import Operatorheader from '../Headers/Operatorheader'
import { OperatorBody, Links, OperatorText } from '../../styled-components'



export default function OperatorTrucks({match, setItems}) {
    // console.log(setItems)
    const [item, setItem] = useState([]);
    const [truck, setTrucks] = useState([]);


    useEffect(()=>{

        
        axiosWithAuth().get(`/api/ops/${match.params.id}`)
        .then(res =>{
            // console.log(res.data.data)
            setItem(res.data.data)
        })
        .catch(err =>{
            console.log(err, 'No data Coming in!')
        })

        axiosWithAuth().get(`/api/ops/${match.params.id}/trucks`)
        .then(res =>{
            // console.log(res.data.operatorsTrucks)
            setTrucks(res.data.operatorsTrucks)

        })
        .catch(err =>{
            console.log(err, 'No data Coming in!')
        })

    },[match.params.id])


    return (
        <div>
        <Operatorheader/>
        <OperatorBody>
        <OperatorText>Welcome To your Dashboard: {item.username}</OperatorText>
        <Links href ={`/Operator/Dashboard/trucks/add/${item.id}`}><h2>Click Here: To add a truck</h2></Links>
        <OperatorText>Here are your Current Trucks</OperatorText>
        <OperatorText>
            </OperatorText>
            {truck.map(truck =>{
                return (
                    <OpTruckCard
                    user={item.id}
                    key={truck.id}
                    id={truck.id}
                    truckName={truck.truckName}
                    image={truck.imgOfTruck}
                    location={truck.currentLocation}
                    departTime={truck.departTime}

                    />
                )
            })}
            </OperatorBody>
        </div>
    )
}
