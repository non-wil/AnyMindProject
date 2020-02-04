import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'
import './style.scss'

const columns = [
  {
    title: 'Tweet',
    dataIndex: 'tweet',
    key: 'tweet',
  },
  {
    title: 'Likes',
    dataIndex: 'likes',
    key: 'likes',
  },
  {
    title: 'Replies',
    dataIndex: 'replies',
    key: 'replies',
  },
  {
    title: 'Retweets',
    dataIndex: 'retweets',
    key: 'retweets',
  },
  {
    title: 'Hashtags',
    dataIndex: 'hashtags',
    key: 'hashtags',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
]

const data = []

const CustomTable = props => {
  return (
    <div className="custom-table">
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

CustomTable.propTypes = {}

export default CustomTable
