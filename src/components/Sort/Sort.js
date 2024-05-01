import React from 'react'
import { Segmented } from 'antd'
import { connect } from 'react-redux'

import { setTab } from '../../store/action'
import { tabNames } from '../../store/reducer'

const Sort = ({ setTabAction }) => {
  const changeTab = (value) => {
    setTabAction(value)
  }
  return <Segmented className="segmented" size="large" options={tabNames} onChange={changeTab} block />
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTabAction: (value) => {
      dispatch(setTab(value))
    },
  }
}

export default connect(null, mapDispatchToProps)(Sort)
