import React from 'react'
import axiosWithAuth from '../axiosWithAuth'
import {useHistory} from 'react-router-dom'
import { Card, CardPic, TruckButton, CardButton } from '../../styled-components'
import '../../App.css'

export default function MenuCard(props) {
    const {push} = useHistory();
    const handleDelete = e => {
        axiosWithAuth().delete(`/api/menus/${props.id}`)
        .then(res =>{
            window.location.reload(true)
            push(`/Operator/Dashboard/`)
            console.log(res);
    
        })
        .catch (err =>{
            console.log(err,'no data coming in')
        })
    }


    console.log(props)
    return (
        <Card>
            <CardPic src={props.menuPhoto}/>
            <div className='detailText2'>
            <h1>{props.menuName}</h1>
            <p >{props.menuDesc}</p>
            <p >Cost: ${props.menuPrice}</p>
            <p  >Customer Rating: {props.costumerR}</p>
            <CardButton>
            <TruckButton onClick={handleDelete} >Delete</TruckButton>
            <TruckButton onClick={handleDelete} >Update</TruckButton>
            </CardButton>
            </div>
        </Card>
    )
}
