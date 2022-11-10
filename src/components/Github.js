import React, { useEffect, useState } from 'react'

const Github = () => {
	const [githubData, setGithubData] = useState([])
	const githubUser = 'tylerking'
  
	useEffect(() => {
		const fetchGithubData = () => {
			return fetch(`https://api.github.com/users/${githubUser}`)
				.then((response) => response.json())
				.then((data) => setGithubData(data))
		}

		fetchGithubData()
	}, [])
  
	return (
		<React.Fragment>
			<img
				alt={githubData.login}
				src={githubData.avatar_url}
			/>
			<p>Username: {githubData.name}</p>
			<p>Repos: {githubData.public_repos}</p>
			<p>Following: {githubData.following}</p>
		</React.Fragment>
	)
}

export default Github