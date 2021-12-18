import React from 'react';
import {Route, Routes, Link, useParams} from 'react-router-dom'
import {HomePage} from './Pages/HomePage';
import {Blog} from './Pages/Blog';
import {About} from './Pages/About';
import {NotFound} from './Pages/NotFound';
import {Layout} from './components/Layout'

function App() {

	return (
		<>
			<Routes>
				<Route path='/' element={<Layout/>}>

					<Route index element={<HomePage/>}/>
					<Route path='posts' element={<Blog/>}/>
					<Route path='about' element={<About/>}/>
					<Route path='*' element={<NotFound/>}/>

				</Route>
			</Routes>

		</>
	);
}

export default App;
