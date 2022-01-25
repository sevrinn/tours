import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import './App.css'

//set url to the api endpoint
const url = 'https://course-api.com/react-tours-project'

function App() {
	//STATE
	const [loading, setLoading] = useState(true)
	const [tours, setTours] = useState([])
	return (
		<div className='App'>
			<h1>lets gooooooo</h1>
		</div>
	)
}

export default App
