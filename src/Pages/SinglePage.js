import React, {useEffect, useState} from 'react'
import {Link, useMatch, useParams} from 'react-router-dom'
import axios from 'axios'
import {CreatePost} from './CreatePost'
import {CustomLink} from '../components/CustomLink'

export const SinglePage = () => {
	const {id} = useParams()
	const [post, setPost] = useState(null)

	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => res.data)
			.then(data => setPost(data))
	}, [])

	return (
		<div>
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