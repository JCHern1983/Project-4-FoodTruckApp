import React,{useState} from "react";
import {useHistory} from 'react-router-dom'
import axiosWithAuth from '../../components/axiosWithAuth'
import { FormLabel, FormSpacing, TruckFormContainer, InputStyle, TruckButton } from '../../styled-components'


export default function AddTruckForm ({match}) {
const {push} = useHistory();
// console.log(match.params.id)





  const [truck, setTruck] = useState({
    truckName: "",
    imgOfTruck: "",
    customerRatings: 0,
    customerRatingAvg: 0,
    currentLocation: "",
    departTime: ""
  });


  const handleChanges = event => {
    setTruck({ ...truck, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    axiosWithAuth().post(`/api/ops/${match.params.id}/trucks`, truck)
    .then(res =>{
        // console.log(res)
        setTruck({   truckName: "", imgOfTruck: "", customerRatings: 0, customerRatingAvg: 0, currentLocation: "", departTime: "" });
        push(`/Operator/Dashboard/trucks/${match.params.id}`)
    })
    .catch(err =>{
        console.log(err, 'No data coming in!')
    })

  };
  

  return (
    <>
      <TruckFormContainer>
        <FormSpacing onSubmit={submitForm}>
          <FormLabel htmlFor="truckName">Food Truck Name</FormLabel>
          <InputStyle
            id="truckName"
            type="text"
            name="truckName"
            placeholder="Enter a Truck Name"
            onChange={handleChanges}
            value={truck.truckName}
          />
          <FormLabel htmlFor="truckImage">Food Truck Image</FormLabel>
          <InputStyle
            id="imgOfTruck"
            type="text"
            name="imgOfTruck"
            placeholder="Source to your Image"
            onChange={handleChanges}
            value={truck.imgOfTruck}
          />
          <FormLabel htmlFor="customerRatings">Customer Rating</FormLabel>
          <InputStyle
            id="customerRatings"
            type="number"
            name="customerRatings"
            placeholder="add rating here"
            onChange={handleChanges}
            value={truck.customerRatings}
          />

          <FormLabel htmlFor="customerRatingAvg">Customer Rating Avg</FormLabel>
          <InputStyle
            id="customerRatingAvg"
            type="number"
            name="customerRatingAvg"
            placeholder="add rating here"
            onChange={handleChanges}
            value={truck.customerRatingAvg}
          />
          <FormLabel htmlFor="currentLocation">Current Location</FormLabel>
          <InputStyle
            id="currentLocation"
            type="text"
            name="currentLocation"
            placeholder="Enter a Current Location"
            onChange={handleChanges}
            value={truck.currentLocation}
          />
          <FormLabel htmlFor="departTime">Depart Time</FormLabel>
          <InputStyle
            id="departTime"
            type="text"
            name="departTime"
            placeholder="Enter a Departure Time"
            onChange={handleChanges}
            value={truck.departTime}
          />

          <TruckButton type="submit">Add Food Truck</TruckButton>
        </FormSpacing>
      </TruckFormContainer>
    </>
  );
};



