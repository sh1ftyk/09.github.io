import React from 'react'
import { Segmented } from 'antd'
import { connect } from 'react-redux'

import { tabReducer, tabNames } from '../../store/reducer'

const Sort = ({ tabReducer }) => {
  const changeTab = (value) => {
    tabReducer(value)
  }
  return <Segmented className="segmented" size="large" options={tabNames} onChange={changeTab} block />
}

export default connect(null, { tabReducer })(Sort)
