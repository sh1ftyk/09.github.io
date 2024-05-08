import React from 'react'
import { Segmented } from 'antd'
import { connect } from 'react-redux'

import { tabReducer, tabNames, filterReducer } from '../../store/reducer'

const Sort = ({ tabReducer, actionTab }) => {
  const changeTab = (value) => {
    tabReducer(value)
  }
  return (
    <Segmented
      className="segmented"
      size="large"
      options={tabNames}
      defaultValue={actionTab}
      onChange={changeTab}
      block
    />
  )
}
const mapStateToProps = (state) => {
  return {
    actionTab: state.actionTab,
  }
}

export default connect(mapStateToProps, { tabReducer, filterReducer })(Sort)
