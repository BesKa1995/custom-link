import React, {useEffect, useRef} from 'react'
import {Link, NavLink, Outlet, useMatch, useParams} from 'react-router-dom'
import {CustomLink} from './CustomLink'


const setActive = ({isActive}) => isActive ? 'active-link' : ''

export const Layout = () => {

	return <>
		<header>
			<CustomLink to='/'>Home</CustomLink>
			<CustomLink to='/posts'>Blog</CustomLink>
			<CustomLink to="/about">About</CustomLink>
		</header>

		<main className='container'>
			<Outlet/>
		</main>

		<footer className='container'>1111</footer>
	</>
}