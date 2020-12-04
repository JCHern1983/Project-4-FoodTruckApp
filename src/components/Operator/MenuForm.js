import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axiosWithAuth from '../axiosWithAuth'
import { FormLabel, FormSpacing, TruckFormContainer, InputStyle, TruckButton } from '../../styled-components'




export default function MenuForm({match}) {
    const {push } = useHistory();
    const id = match.params.id;
    console.log(match)

    const [menu, setMenu] = useState({
            menuName: '',
            menuDesc: '',
            menuPhoto: '',
            menuPrice: 0,
            customerRatingAvg: 0,
    });


console.log(menu)
    const handleChanges = event => {
        setMenu({ ...menu, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth().post(`/api/trucks/${id}/menu`, menu)
        .then(res =>{
            console.log(res)
            setMenu({   menuName: "", menuDesc: "", menuPhoto: '', menuPrice: 0, customerRatingAvg: "" });
            push(`/Operator/Dashboard/trucks/update/menu/${id}`)
        })
        .catch(err =>{
            console.log(err, 'No data coming in!')
        })
    
      };
      




    return (
        <div>
        <TruckFormContainer>
        <FormSpacing>
        <h1>Create Menu Item</h1>
          <FormLabel htmlFor="menuName">Menu Name</FormLabel>
          <InputStyle
            id="menuName"
            type="text"
            name="menuName"
            placeholder="Menu Name"
            onChange={handleChanges}
            value={menu.menuName}
          />
          <FormLabel htmlFor="MenuDesc">Menu Description</FormLabel>
          <InputStyle
            id="menuDesc"
            type="text"
            name="menuDesc"
            placeholder="Menu Description"
            onChange={handleChanges}
            value={menu.menuDesc}
          />
          <FormLabel htmlFor="menuPhoto">Menu Photo</FormLabel>
          <InputStyle
            id="menuPhoto"
            type="text"
            name="menuPhoto"
            placeholder="Add Photo Link Here"
            onChange={handleChanges}
            value={menu.menuPhoto}
          />

          <FormLabel htmlFor="menuPrice">Item Price</FormLabel>
          <InputStyle
            id="menuPrice"
            type="number"
            name="menuPrice"
            placeholder="Price of Item"
            onChange={handleChanges}
            value={menu.menuPrice}
          />
          <FormLabel htmlFor="customerRatingAvg">Customer Rating Avg</FormLabel>
          <InputStyle
            id="customerRatingAvg"
            type="number"
            name="customerRatingAvg"
            placeholder="Avg Customer Rating"
            onChange={handleChanges}
            value={menu.customerRatingAvg}
          />
          <TruckButton onClick={handleSubmit}>Add Menu Item</TruckButton>
        </FormSpacing>
      </TruckFormContainer>
        </div>
    )
}