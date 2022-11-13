import React, { useEffect, useState } from 'react'

import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'

const Stats = () => {
  const [githubData, setGithubData] = useState([])
  const [treehouseData, setTreehouseData] = useState()
  const githubUser = 'tylerking'
  const treehouseUser = 'doitliketyler'
  
  useEffect(() => {
    const fetchGithubData = () => {
      return fetch(`https://api.github.com/users/${githubUser}`)
        .then((response) => response.json())
        .then((data) => setGithubData(data))
    }
    const fetchTreehouseData = () => {
      return fetch(`https://teamtreehouse.com/profiles/${treehouseUser}.json`)
        .then((response) => response.json())
        .then((data) => setTreehouseData(data.badges.length))
    }
    fetchTreehouseData()
    fetchGithubData()
  }, [])
  
  return (
    <section id='stats'>
      <Paper>
        <Grid container spacing={2}>
          <Grid xs={3}>
            <span>10+</span> Years Experience
          </Grid>
          <Grid xs={3}>
            <span>50+</span> Projects Done
          </Grid>
          <Grid xs={3}>
            <span>{githubData.public_repos}</span> Github Repos
          </Grid>
          <Grid xs={3}>
            <span>{treehouseData}</span> Treehouse Badges
          </Grid>
        </Grid>
      </Paper>
    </section>
  )
}

export default Stats