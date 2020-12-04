import React, {useState} from 'react'
import axiosWithAuth from '../axiosWithAuth'
import {useHistory} from 'react-router-dom';
import { MainPageContainer2, FormContainer, FormSpacing2, Links2 } from '../../styled-components'



export default function OperatorLogin({setIsLoggedIn}) {







    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const {push} = useHistory();

    const handleChange = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value })

    };




    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
            axiosWithAuth()
        .post('/api/op-auth/login', credentials)
        .then(res => {
            console.log("login, post", res)
            localStorage.setItem("token", res.data.token)
            localStorage.setItem('Logged in', true)
            setIsLoading(false);
            push('/Operator/DashBoard')
        })
        .catch(err => {
            console.log("err", err, credentials)
            setIsLoading(false);
        })

        




    }


	return (
  <MainPageContainer2>
		<div className='UserLogin'>
            <FormContainer >
            <h1> Operator Login </h1>
					<FormSpacing2
						type="text"
						placeholder="User Name"
						name="username"
                        value={credentials.username}
                        onChange={handleChange} 
					/>

					<FormSpacing2
						type="password"
						placeholder="Password"
						name="password"
                        value={credentials.password}
                        onChange={handleChange} 
                    />


                    {isLoading ? 'loading...' : <button onClick={handleSubmit}>Log in</button>}

					<p> Not a user? </p>
					<Links2 href="/OperatorSignUp">Sign up!</Links2>
				</FormContainer>
        </div>
        </MainPageContainer2>
	)
}
