import React, {createContext, useState} from 'react'


export const AuthContext = createContext(null)


export const AuthProvider = ({children}) => {
	const [user, setUser] = useState(null)
	const signin = (user, cb) => {
		setUser(user)
		cb()
	}
	const singout = (cb) => {
		setUser(null)
		cb()
	}


	const value = {user, signin, singout}


	return <AuthContext.Provider value={value}>
		{children}
	</AuthContext.Provider>
}