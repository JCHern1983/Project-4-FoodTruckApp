import React, {useState} from 'react'
import axiosWithAuth from '../components/axiosWithAuth'
import {useHistory} from 'react-router-dom';
import { MainPageContainer, FormContainer, FormSpacing2, Links2 } from '../styled-components'


export default function Register() {
    const [register, setRegister] = useState({
        username: '',
        password: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const {push} = useHistory();

    const handleChange = e => {
        setRegister({...register, [e.target.name]: e.target.value })

    };


    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        axiosWithAuth()
        .post('/api/diner-auth/register', register)
        .then(res => {
            console.log("post", res)
            push('/UserLogin')
        })
        .catch(err => {
            console.log("err", err, register)
            setIsLoading(false);
        })
    }


	return (
        <MainPageContainer>
		<div>
            <FormContainer >
            <h1> Register </h1>
					<FormSpacing2
						type="text"
						placeholder="User Name"
						name="username"
                        value={register.username}
                        onChange={handleChange} 
					/>
					<FormSpacing2
						type="password"
						placeholder="Password"
						name="password"
                        value={register.password}
                        onChange={handleChange} 
					/>

                    {isLoading ? 'loading...' : <button onClick={handleSubmit}>Register</button>}

					<p> Already a user? </p>
					<Links2 href="/UserLogin">Login</Links2>
				</FormContainer>
        </div>
        </MainPageContainer>
	)
}