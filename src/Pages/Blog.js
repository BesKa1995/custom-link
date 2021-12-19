import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link, useSearchParams} from 'react-router-dom'
import {BlogFilter} from './BlogFilter'

export const Blog = () => {
	const [posts, setPosts] = useState([])
	const [searchParams, setSearchParams] = useSearchParams()

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.data)
			.then(data => setPosts(data))
	}, [])

	const postQuery = searchParams.get('post') || ''
	const latest = searchParams.has('latest')
	console.log(latest)
	const startsFrom = latest ? 80 : 1


	return (
		<div>
			<BlogFilter
				postQuery={postQuery}
				latest={latest}
				setSearchParams={setSearchParams}
			/>
			<Link to='/posts/new'>Add new posts</Link>
			{
				posts.filter(post => post.title.includes(postQuery) && post.id >= startsFrom)
					.map(post => (
						<Link key={post.id} to={`/posts/${post.id}`}>
							<li>{post.title}</li>
						</Link>
					))
			}
		</div>

	)
}
