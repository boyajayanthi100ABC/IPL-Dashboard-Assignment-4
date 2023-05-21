// Write your code here

import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
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
  } = eachMatch

  return (
    <li className="bg-container">
      <img src={competingTeamLogo} alt="" className="logo-img" />
      <h1> {competingTeam} </h1>
      <p> {result} </p>
      <p> {matchStatus} </p>
    </li>
  )
}

export default MatchCard
