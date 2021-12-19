import React, {useState} from 'react'
import {useSearchParams} from 'react-router-dom'


export const BlogFilter = ({postQuery, latest, setSearchParams}) => {
	const [search, setSearch] = useState(postQuery)
	const [checked, setChecked] = useState(latest)
	const handleSubmit = (e) => {
		e.preventDefault()
		const form = e.target
		const query = form.search.value
		const isLatest = form.latest.checked
		const params = {}
		console.log(isLatest)
		if (query.length) params.post = query
		if (isLatest) params.latest = isLatest
		setSearchParams(params)
	}

	return (
		<form autoComplete='off' onSubmit={handleSubmit}>
			<input type="search" name="search" value={search} onChange={e => setSearch(e.target.value)}/>

			<label style={{
				padding: '0 1rem'
			}}>
				<input type="checkbox" name='latest' checked={checked} onChange={e => setChecked(e.target.checked)}/> New only
			</label>

			<button type='submit' value='Search'>subbmit</button>
		</form>

	)
}