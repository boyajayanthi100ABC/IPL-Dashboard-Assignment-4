// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatchDetails

  console.log(latestMatchDetails)
  return (
    <div>
      <div className="bg-container">
        <div className="first">
          <h1 className="heading"> {competingTeam} </h1>
          <h3> {date} </h3>
          <p> {venue} </p>
          <p> {result} </p>
        </div>
        <div>
          <img src={competingTeamLogo} alt="" className="logo-image" />
        </div>
        <div className="first">
          <p> first Innings {firstInnings} </p>
          <p> Second Innings {secondInnings} </p>
          <p> Man OfThe Match{manOfTheMatch} </p>
          <p> {umpires} </p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
