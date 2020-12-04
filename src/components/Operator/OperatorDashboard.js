import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../axiosWithAuth'
import OpTruckCard from './OpTruckCard'
import Operatorheader from '../Headers/Operatorheader'
import { OperatorBody, OperatorText, Links } from '../../styled-components'
import jwt_decode from "jwt-decode";

export default function OperatorDashboard(match) {
    const [item, setItem] = useState([]);
    const [truck, setTrucks] = useState([]);
    const [operator] = useState(localStorage.getItem('token'))
    // console.log(operator)
    let decoded = jwt_decode(operator);
    // console.log(decoded.sub)
 




    useEffect(()=>{
        axiosWithAuth().get(`/api/ops/${decoded.sub}`)
        .then(res =>{
            console.log(res.data.data)
            setItem(res.data.data)
        })
        .catch(err =>{
            console.log(err, 'No data Coming in!')
        })

        axiosWithAuth().get(`/api/ops/${decoded.sub}/trucks`)
        .then(res =>{
            console.log(res.data.operatorsTrucks)
            setTrucks(res.data.operatorsTrucks)

        })
        .catch(err =>{
            console.log(err, 'No data Coming in!')
        })
    },[decoded.sub])
    




    return (
        <>
        <Operatorheader/>
        <OperatorBody>
        <OperatorText>Welcome: {item.username}</OperatorText>
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
        </>

    )
}
