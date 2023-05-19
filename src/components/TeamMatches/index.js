// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {blogDate: {}, isLoading: true}

  componentDidMount() {
    this.getItemsData()
  }

  getItemsData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.umpires,
        result: data.result,
        manOfTheMatch: data.man_of_the_match,
        id: data.id,
        date: data.date,
        venue: data.venue,
        competingTeam: data.competing_team,
        competingTeamLogo: data.competing_team_logo,
        firstInnings: data.first_innings,
        secondInnings: data.second_innings,
        matchStatus: data.match_status,
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

    return (
      <div className={`bg-container ${id}`}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
