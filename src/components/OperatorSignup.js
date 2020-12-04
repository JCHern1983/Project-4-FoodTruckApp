import React, {useState} from 'react'
import axiosWithAuth from '../components/axiosWithAuth'
import {useHistory} from 'react-router-dom';
import { MainPageContainer2, FormContainer, FormSpacing2, Links2 } from '../styled-components'


export default function Register2() {
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
        .post('/api/op-auth/register', register)
        .then(res => {
            console.log("post", res)
            push('/OperatorLogin')
        })
        .catch(err => {
            console.log("err", err, register)
            setIsLoading(false);
        })
    }


	return (
        <MainPageContainer2>
		<div>
            <FormContainer>
            <h1> Register As Operator </h1>
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

					<p> Already an Operator? </p>
					<Links2 href="/OperatorLogin">Login</Links2>
				</FormContainer>
        </div>
        </MainPageContainer2>
	)
}