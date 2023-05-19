// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {blogData} = props
  const {id, name, teamImageUrl} = blogData

  return (
    <Link to={`/team-matches/${id}`} className="link-items">
      <li className="team-card">
        <img className="image" src={teamImageUrl} alt={`${name}`} key={id} />
        <p className="card-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
