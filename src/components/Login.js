import React, {useState} from 'react'
import axiosWithAuth from '../components/axiosWithAuth'
import {useHistory} from 'react-router-dom';
import { MainPageContainer, FormContainer, FormSpacing2, Links2 } from '../styled-components'
// import jwt_decode from "jwt-decode";




export default function Login({setIsLoggedIn}) {


    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
console.log(credentials)
    const [isLoading, setIsLoading] = useState(false);
    const {push} = useHistory();

    const handleChange = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value })

    };




    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
            axiosWithAuth()
        .post('/api/diner-auth/login', credentials)
        .then(res => {
            console.log("login, post", res)
            localStorage.setItem("token", res.data.token)
            localStorage.setItem('Logged in', true)
            setIsLoading(false);
            push('/Diner/DashBoard')
        })
        .catch(err => {
            console.log("err", err, credentials)
            setIsLoading(false);
        })

        




    }


	return (
        <MainPageContainer>
		<div className='UserLogin'>

            <FormContainer >
            <h1> User Login </h1>

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
					<Links2 href="/Signup">Sign up!</Links2>
                </FormContainer>

        </div>
        </MainPageContainer>

	)
}


