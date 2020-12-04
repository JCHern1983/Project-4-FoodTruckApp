import React from 'react'
import { Link } from 'react-router-dom'
import './SignSelect.css'
import {Links2} from './styled-components'

export default function Select(props) {
	return (
		<div className='Select'>
		<Links2 href='https://cranky-keller-308f13.netlify.app/'><img className='logo' alt='Main Logo' src={'https://i.ibb.co/kqw30n8/logo.png'}/></Links2>
			<div>
				<Link className="Login-Links" to="/UserLogin">Login as a Diner!</Link>
			</div>
		<div>
			<Link className="Login-Links" to="/OperatorLogin">Login as an Operator!</Link>
		</div>
		</div>
	)
}
