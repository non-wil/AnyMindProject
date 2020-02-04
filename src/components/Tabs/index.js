import React from 'react'
import PropTypes from 'prop-types'
import { Tabs } from 'antd'
import Input from 'components/Input'
import Table from 'components/Table'
import { getTweetsByHashTag } from 'api'
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
    this._getTweetsByHashTag('Python')
  }

  _getTweetsByHashTag = hashtag => {
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
            <Input onSearch={this._getTweetsByHashTag} />
            <div className="tab-body">
              <Table tweetsList={tweetsList} loading={isFetchingTweetsList} />
            </div>
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

CustomTabs.propTypes = {}

export default CustomTabs
