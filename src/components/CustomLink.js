import {Link, useMatch} from 'react-router-dom'
import React from 'react'


export const CustomLink = ({to, children, ...props}) => {

	const match = useMatch(to)
	const setActive = () => match ? 'active-link' : ''

	return (
		<>
			<Link
				{...props}
				to={to}
				className={setActive()}
			>
				{children}
			</Link>
		</>
	)
}