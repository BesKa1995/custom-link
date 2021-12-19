import React from 'react'
import {useParams} from 'react-router-dom'


export const CreatePost = () => {
	const {id} = useParams()
	console.log(id)
	return (
		<h1>Create Post</h1>
	)
}