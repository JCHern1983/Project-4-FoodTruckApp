import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../axiosWithAuth'
import MenuCard from './MenuCard'
import OperatorHeader from '../Headers/Operatorheader'
import { OperatorBody, Links } from '../../styled-components'

export default function Menu({match}) {
    console.log(match)
const id = match.params.id
const [menus, setMenus] = useState([]);
console.log(menus)
useEffect(()=>{
    axiosWithAuth().get(`/api/trucks/${id}/menu`)
    .then(res =>{
        console.log(res.data.trucksMenu)
        setMenus(res.data.trucksMenu)
    })
    .catch(err=>{
        console.log(err, 'No data Cmoing in.')
    })
},[id])


    return (
        <div>
        <OperatorHeader/>
        <OperatorBody>
        <h1>Current Menu:</h1>
        <div className='Menu'>
        {menus.map(item =>{
            return (
                <MenuCard
                key={item.id}
                id={item.id}
                menuName={item.menuName}
                menuDesc={item.menuDesc}
                menuPhoto={item.menuPhoto}
                menuPrice={item.menuPrice}
                costumerR={item.customerRatingAvg}
                />

            )
        })}
        
        </div>

           <Links href={`/Operator/Dashboard/trucks/update/menu/create/${id}`}><h1>Click Create Menu</h1></Links>
           </OperatorBody>
        </div>

    )
}
