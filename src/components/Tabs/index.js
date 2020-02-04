import React from 'react'
import { Tabs } from 'antd'
import Input from 'components/Input'
import Table from 'components/Table'
// import { getTweetsByHashTag } from 'api' // NOTE: Import API but didn't use, use mock instead. Reason is at function "_getTweetsByHashTag"
import { getTweetsByHashTagResponse } from 'mock/getTweetsByHashTagResponse.js'
import './style.scss'

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

  _getTweetsByHashTag = hashtag => {
    //
    // NOTE: Cannot get result from API because of CORS policy error.
    //       So I will use mock result instead.
    //
    console.log('Get tweet by hashtag: ', hashtag)

    this.setState({ isFetchingTweetsList: true }, () => {
      setTimeout(() => {
        console.log('getTweetsByHashTagResponse', getTweetsByHashTagResponse)
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

  render() {
    const { tweetsList, isFetchingTweetsList } = this.state
    return (
      <div className="card-container">
        <Tabs type="card">
          <TabPane tab="Hashtag search" key="1">
            <Input label="Hashtag search" onSearch={this._getTweetsByHashTag} />
            <Table tweetsList={tweetsList} loading={isFetchingTweetsList} />
          </TabPane>
          <TabPane tab="User search" key="2">
            <p>Content of Tab Pane 2</p>
            <p>Content of Tab Pane 2</p>
            <p>Content of Tab Pane 2</p>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default CustomTabs
