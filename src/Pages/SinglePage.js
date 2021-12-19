import React from 'react'
import {useParams} from 'react-router-dom'

export const SinglePage = () => {
	const params = useParams()

	console.log(params)
	return (
		<div>
			1
		</div>
	)

}