import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {useAuth} from '../hoc/useAuth'


export const CreatePost = () => {
	const {id} = useParams()
	const {singout} = useAuth()
	const navigate = useNavigate()
	return (
		<div>
			<h1>Create Post</h1>
			<button onClick={() => singout(() => navigate('/', {replace: true}))}>Logout</button>

		</div>

	)
}