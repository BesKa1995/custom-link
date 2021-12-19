import React, {useEffect, useState} from 'react'
import {Link, NavLink, useLocation, useMatch, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import {CustomLink} from '../components/CustomLink'
import {Blog} from './Blog'

export const SinglePage = () => {

	const {id} = useParams()
	const [post, setPost] = useState(null)
	const navigate = useNavigate()
	const goBack = () => navigate(-1)

	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => res.data)
			.then(data => setPost(data))

	}, [])

	return (
		<div>
			<button onClick={goBack}>Go back</button>
			{post && (
				<>
					<h1>{post.title}</h1>
					<p>{post.body}</p>

					<CustomLink
						to={`/posts/${id}/edit`}

					>
						Edit this post
					</CustomLink>
				</>
			)}
		</div>
	)

}
