import React from 'react'
import PropTypes from 'prop-types'
import { Tabs } from 'antd'
import './style.scss'

const { TabPane } = Tabs

const CustomTabs = props => {
  return (
    <div className="card-container">
      <Tabs type="card">
        <TabPane tab="Hashtag search" key="1">
          <p>Content of Tab Pane 1</p>
          <p>Content of Tab Pane 1</p>
          <p>Content of Tab Pane 1</p>
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

CustomTabs.propTypes = {}

export default CustomTabs
