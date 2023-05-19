// Write your code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isLoading: true, blogsData: []}

  componentDidMount() {
    this.getDataOfApi()
  }

  getDataOfApi = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const fetchedData = await response.json()

    const formattedData = fetchedData.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({blogsData: formattedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state

    return (
      <div className="bg-container">
        <div className="head-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-heading"> IPL Dashboard </h1>
        </div>
        <div>
          {isLoading ? (
            <Loader type="Oval" color="#ffffff" height={50} />
          ) : (
            <ul className="ul-container">
              {blogsData.map(eachItem => (
                <TeamCard key={eachItem.id} blogData={eachItem} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
