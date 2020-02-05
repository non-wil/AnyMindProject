import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import './style.scss'

const { Search } = Input

const CustomInput = props => {
  const { label, onSearch, placeholder } = props
  return (
    <div className="custom-input">
      <label>{label}</label>
      <Search
        size="large"
        placeholder={placeholder}
        onSearch={value => onSearch(value)}
        style={{ width: 200 }}
      />
    </div>
  )
}

CustomInput.propTypes = {
  label: PropTypes.string,
  onSearch: PropTypes.func,
}

export default CustomInput
