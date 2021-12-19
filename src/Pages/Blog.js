import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export const Blog = () => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.data)
			.then(data => setPosts(data))
	}, [])


	return (
		<div>
			<Link to='/posts/new'>Add new posts</Link>
			{
				posts.map(post => (
					<Link key={post.id} to={`/posts/${post.id}`}>
						<li>{post.title}</li>
					</Link>
				))
			}
		</div>

	)
}
