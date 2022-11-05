import React, { useEffect, useState } from 'react'

const Treehouse = () => {
  const [treehouseData, setTreehouseData] = useState([])
  const userName = 'doitliketyler'
  
  useEffect(() => {
    const fetchData = () => {
      return fetch(`https://teamtreehouse.com/profiles/${userName}.json`)
        .then((response) => response.json())
        .then((data) => setTreehouseData(data))
    }
    fetchData()
  }, [])
  
  return (
    <React.Fragment>
      <br/>
      <br/><br/><br/><br/><br/>
      <p>Username: {treehouseData.name}</p>
      <p>Achievements: {treehouseData.badges.length}</p>
      <p>Points: {treehouseData.points.total}</p>
      {/*{Object.keys(treehouseData.points).map((key, index) => {
        return (
          <div key={index}>
            {key}: {treehouseData.points[key]}
          </div>
        )
      })} */}
    </React.Fragment>
  )
}

export default Treehouse


