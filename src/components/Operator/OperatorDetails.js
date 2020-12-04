import React from 'react'
import {Links} from '../../styled-components'

export default function OperatorDetails(props) {
    console.log(props)
    return (
        <div>
            <Links href={`/Operator/Dashboard/trucks/${props.id}`}><h1>{props.userName}</h1></Links>
        </div>
    )
}
