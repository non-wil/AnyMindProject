import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import uuidv1 from 'uuid/v1'
import { trimStringAppendDot } from 'utils'
import { Table } from 'antd'
import './style.scss'

const columns = [
  {
    title: 'Tweet',
    dataIndex: 'text',
    key: 'text',
    width: '25%',
    render: text => <span>{trimStringAppendDot(text)}</span>,
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
    render: hashtags => (
      <div>
        {hashtags.map((item, index) => {
          if (index > 2) return ''
          else return <div key={index}>{item}</div>
        })}
      </div>
    ),
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: date => <span>{moment(date).format('MMM DD, YYYY')}</span>,
  },
]

const CustomTable = props => {
  const { tweetsList, loading } = props
  return (
    <div className="custom-table">
      <Table
        rowKey={record => `${record.account.id}${uuidv1()}`}
        columns={columns}
        dataSource={tweetsList}
        loading={loading}
      />
    </div>
  )
}

CustomTable.propTypes = {
  tweetsList: PropTypes.array,
  loading: PropTypes.bool,
}

export default CustomTable
