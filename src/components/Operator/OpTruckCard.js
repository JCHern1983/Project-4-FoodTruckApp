import React from 'react'
import axiosWithAuth from '../axiosWithAuth'
import {useHistory } from 'react-router-dom'
import '../../App.css'
import { Card, Links, TruckButton, CardButton } from '../../styled-components'







export default function OpTruckCard(props) {
    // console.log(props)
    const {push} = useHistory();
    const handleDelete = e => {
        axiosWithAuth().delete(`/api/trucks/${props.id}`)
        .then(res =>{
            window.location.reload(true)
            push(`/Operator/Dashboard/trucks/${props.id}`)
            // console.log(res);
    
        })
        .catch (err =>{
            console.log(err,'no data coming in')
        })
    }




    return (
        <Card>
            <img className='truckImg' alt='food truck pic' src={props.image}/>
            <div className='edit-buttons'>
            <div className='truckDetails'>
            <h1 className='truckName'>{props.truckName}</h1>
            <p className='detailText'>Current Location: {props.location}</p>
            <p className='detailText' >Departure Time: {props.departTime}</p>
            <Links href={`/Operator/Dashboard/trucks/update/menu/${props.id}`}><p className='detailText' >Click to View/Edit Menu</p></Links>
            </div>
            <CardButton>
            <Links href={`/Operator/Dashboard/trucks/update/${props.id}`}><TruckButton>Update</TruckButton></Links>
            <TruckButton className='deletebtn' onClick={handleDelete}>Delete</TruckButton>
            </CardButton>
            </div>
            </Card>
    )
}
