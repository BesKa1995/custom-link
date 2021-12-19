import React from 'react';
import {Route, Routes, Link, useParams, Navigate} from 'react-router-dom'
import {HomePage} from './Pages/HomePage';
import {Blog} from './Pages/Blog';
import {About} from './Pages/About';
import {NotFound} from './Pages/NotFound';
import {Layout} from './components/Layout'
import {SinglePage} from './Pages/SinglePage'
import {CreatePost} from './Pages/CreatePost'
import {EditPost} from './Pages/EditPost'
import {RequireAuth} from './hoc/RequireAuth'
import {LoginPage} from './Pages/LoginPage'
import {AuthProvider} from './hoc/AuthProvider'

function App() {
	return (
		<>
			<AuthProvider>
				<Routes>
					<Route path='/' element={<Layout/>}>

						<Route index element={<HomePage/>}/>
						<Route path='posts' element={<Blog/>}/>
						<Route path='posts/:id' element={<SinglePage/>}/>
						<Route path='login' element={<LoginPage/>}/>

						<Route path='posts/new' element={
							<RequireAuth>
								<CreatePost/>
							</RequireAuth>
						}/>

						<Route path='posts/:id/edit' element={<EditPost/>}/>
						<Route path='about' element={<About/>}/>
						<Route path='*' element={<NotFound/>}/>

					</Route>
				</Routes>
			</AuthProvider>
		</>
	);
}

export default App;
