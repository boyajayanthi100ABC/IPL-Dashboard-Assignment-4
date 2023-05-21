// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount() {
    this.getItemsData()
  }

  getItemsData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(eachMatch => ({
        umpires: eachMatch.umpires,
        result: eachMatch.result,
        manOfTheMatch: eachMatch.man_of_the_match,
        id: eachMatch.id,
        date: eachMatch.date,
        venue: eachMatch.venue,
        competingTeam: eachMatch.competing_team,
        competingTeamLogo: eachMatch.competing_team_logo,
        firstInnings: eachMatch.first_innings,
        secondInnings: eachMatch.second_innings,
        matchStatus: eachMatch.match_status,
      })),
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  renderTeamMatches = () => {
    const {blogData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = blogData

    return (
      <div>
        <img src={teamBannerUrl} alt="img" className="team-banner-url" />
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        {this.renderRecentMatcheList()}
      </div>
    )
  }

  renderRecentMatcheList = () => {
    const {blogData} = this.state
    const {recentMatches} = blogData

    return (
      <div>
        <ul className="ul-container">
          {recentMatches.map(each => (
            <MatchCard eachMatch={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoader = () => (
    <div className="loader-container">
      <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {blogData} = this.state

    console.log(blogData)

    return (
      <div className={`bg-container ${id}`}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
