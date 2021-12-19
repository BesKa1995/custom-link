import {useLocation, useNavigate} from 'react-router-dom'
import React, {useContext} from 'react'
import {AuthContext} from '../hoc/AuthProvider'
import {useAuth} from '../hoc/useAuth'


export const LoginPage = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const fromPage = location.state?.from?.pathname || '/'
	console.log(fromPage)

	const {signin} = useAuth()

	const handlerSubmit = (event) => {
		event.preventDefault()
		const form = event.target
		const user = form.username.value
		signin(user, () => navigate(fromPage, {replace: true}))
	}

	return (
		<div>
			<h1>Login Page</h1>
			<form onSubmit={handlerSubmit}>
				<label>
					name: <input type="text" name='username'/>

				</label>
				<button type={'submit'}>Login</button>
			</form>
		</div>
	)

}