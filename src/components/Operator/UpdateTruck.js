import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../axiosWithAuth'
import {useHistory} from 'react-router-dom'
// import { FormLabel, FormSpacing, TruckFormContainer, 
// InputStyle, TruckButton } from '../../styled-components'





const initialItem = {
    truckName: '',
    imgOfTruck: '',
    currentLocation: '',
    customerRatings: '',
    customerRatingAvg: '',
    departTime: ''
}

export default function TruckDetails({match}) {
  console.log(match)
    const [item, setItem] = useState(initialItem);
    const {push } = useHistory();
    const id = match.params.id;
    console.log(item)

 
    useEffect(()=>{
      axiosWithAuth().get(`/api/trucks/${id}`)
      .then(res =>{
          console.log(res.data.data)
          setItem(res.data.data)



      })
      .catch(err =>{
          console.log('No Data coming in', err)
      })
  },[id])

    const handleSubmit = e => {
         e.preventDefault();
            axiosWithAuth().put(`/api/trucks/${id}`, item)
            push(`/Operator/Dashboard/trucks/${item.operator_id}`)

      };
    

    const changeHandler = e => {
        e.persist();
        let value = e.target.value;
        
        setItem({
          ...item,
          [e.target.name]: value
        });
      };




    return (
        <div>
        <h1>EDIT DETAILS</h1>
            <form >
        <input
          type="string"
          name="truckName"
          onChange={changeHandler}
          placeholder="truckName"
          value={item.truckName}
        />
        <div className="baseline" />

        <input
          type="string"
          name="imgOfTruck"
          onChange={changeHandler}
          placeholder="imgOfTruck"
          value={item.imgOfTruck}
        />
        <div className="baseline" />

        <input
          type="text"
          name="currentLocation"
          onChange={changeHandler}
          placeholder="Image"
          value={item.currentLocation}
        />
        <div className="baseline" />

        <input
          type="text"
          name="customerRatings"
          onChange={changeHandler}
          placeholder="Customer Rating"
          value={item.customerRatings}
        />

        <div className="baseline" />
        <input
        type="text"
        name="customerRatingAvg"
        onChange={changeHandler}
        placeholder="Customer Avg Rating"
        value={item.customerRatingAvg}
      />
      <div className="baseline" />

        <input
          type="text"
          name="departTime"
          onChange={changeHandler}
          placeholder="Depart Time"
          value={item.departTime}
        />
        <div className="baseline" />
        <button onClick={handleSubmit} >Update</button>
        </form>
        </div>
    )
}
