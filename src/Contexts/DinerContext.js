import React, {useState, useEffect, createContext} from 'react';
import axiosWithAuth from '../components/axiosWithAuth'

export const DinerContext = createContext();



export const DinersListProvider = props => {
    // const [dinersList, setDinersList] = useState([]);
    const [dinerTrucks, setDinerTrucks] = useState([]);
    // const [truckMenus, setTruckMenus] = useState([]);
    // const [operatorTrucks, setOperatorTrucks] = useState([]);
    // console.log(dinerTrucks)
    useEffect(() => {
        
        axiosWithAuth().get('/api/trucks')
        .then(res =>{
            setDinerTrucks(res.data.foodTrucks)
        })
        .catch(err =>{
            console.log('No Data coming in', err)
        })
        

        // axiosWithAuth().get('/api/menus')
        // .then(res =>{
        //     console.log(res.data.menuItems)
        //     setTruckMenus(res.data.menuItems)


        // })
        // .catch(err =>{
        //     console.log('No Data coming in', err)
        // })


        // axiosWithAuth().get('/api/diners')
        // .then(res =>{
        //     console.log(res.data.users)
        //     setDinersList(res.data.users)

        // })
        // .catch(err =>{
        //     console.log('No Data coming in', err)
        // })


    }, [])


    
  

    

    return (
        <DinerContext.Provider value={[dinerTrucks]}>
            {props.children}
        </DinerContext.Provider>
    )
}
