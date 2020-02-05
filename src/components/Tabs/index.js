import React from 'react'
import { Tabs } from 'antd'
import Input from 'components/Input'
import Table from 'components/Table'
import { getTweetsByHashTagResponse } from 'mock/getTweetsByHashTagResponse'
import { searchTweetsByUserResponse } from 'mock/searchTweetsByUser'
import './style.scss'
// import { getTweetsByHashTag } from 'api' // NOTE: Import API but didn't use, use mock instead. Reason is at function "_getTweetsByHashTag"
// import { searchTweetsByUser } from 'api' // NOTE: Import API but didn't use, use mock instead. Reason is at function "_getTweetsByHashTag"

const { TabPane } = Tabs

class CustomTabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tweetsList: [],
      isFetchingTweetsList: false,
    }
  }

  componentDidMount() {
    document.title = 'AnyMind Project'
    this._getTweetsByHashTag('Python')
  }

  /**
   * @param  {string} hashtag
   * @param  {number} offset=0
   */
  _getTweetsByHashTag = (hashtag, offset = 0) => {
    //
    // NOTE: Cannot get result from API because of CORS policy error.
    //       So I will use mock result instead.
    //
    console.log('Get tweet by hashtag: ', hashtag)

    this.setState({ isFetchingTweetsList: true }, () => {
      setTimeout(() => {
        this.setState({
          isFetchingTweetsList: false,
          tweetsList: getTweetsByHashTagResponse.results,
        })
      }, 1000)
    })

    //
    // NOTE: These code are what should really be.
    //
    // return getTweetsByHashTag(hashtag)
    //   .then(({ data }) => {
    //     this.setState({
    //       isFetchingTweetsList: false
    //       tweetsList: data.results,
    //     })
    //   })
    //   .catch(error => {
    //     console.log(`Cannot fetch tweets by ${hashtag}: ${error}`)
    //   })
  }

  /**
   * @param  {string} userName
   * @param  {number} offset=0
   */
  _searchTweetsByUser = (userName, offset = 0) => {
    //
    // NOTE: Cannot get result from API because of CORS policy error.
    //       So I will use mock result instead.
    //
    console.log('Search Tweet by user: ', userName)

    this.setState({ isFetchingTweetsList: true }, () => {
      setTimeout(() => {
        this.setState({
          isFetchingTweetsList: false,
          tweetsList: searchTweetsByUserResponse.results,
        })
      }, 1000)
    })
  }

  onChangeTabs = activeTab => {
    switch (activeTab) {
      case 'hashtag':
        this._getTweetsByHashTag('Python')
        break
      case 'user':
        this._searchTweetsByUser('anymindgroup')
        break
      default:
        return
    }
  }

  render() {
    const { tweetsList, isFetchingTweetsList } = this.state
    return (
      <div className="card-container">
        <Tabs type="card" onChange={this.onChangeTabs}>
          <TabPane tab="Hashtag search" key="hashtag">
            <Input
              label="Hashtag search"
              placeholder="Search by Hashtag"
              onSearch={this._getTweetsByHashTag}
            />
            <Table tweetsList={tweetsList} loading={isFetchingTweetsList} />
          </TabPane>
          <TabPane tab="User search" key="user">
            <Input
              label="User search"
              placeholder="Search by User"
              onSearch={this._searchTweetsByUser}
            />
            <Table tweetsList={tweetsList} loading={isFetchingTweetsList} />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default CustomTabs
