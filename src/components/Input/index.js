import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import './style.scss'

const { Search } = Input

const CustomInput = props => {
  return (
    <div className="custom-input">
      <label>Hashtag search</label>
      <Search
        size="large"
        placeholder="Search By Hashtag"
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
    </div>
  )
}

CustomInput.propTypes = {}

export default CustomInput
