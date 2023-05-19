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
    <div className="bg-container">
      <div className="first">
        <h1 className="heading"> {competingTeam} </h1>
        <h3> {date} </h3>
        <p> {venue} </p>
        <p> {result} </p>
      </div>
      <div>
        <img src={competingTeamLogo} alt="" />
      </div>
      <div>
        <h1> Hi </h1>
      </div>
    </div>
  )
}

export default LatestMatch
