import React from 'react'
import { Segmented } from 'antd'
import { connect } from 'react-redux'

import { setFastest, setCheapest, setOptimal } from '../../store/action'
import { tabName } from '../../store/reducer'

const Sort = ({ setCheapestAction, setFastestAction, setOptimalAction }) => {
  return (
    <Segmented
      className="segmented"
      size="large"
      options={tabName}
      onChange={(value) => {
        if (value === 'CАМЫЙ ДЕШЁВЫЙ') {
          setCheapestAction(value)
        }
        if (value === 'САМЫЙ БЫСТРЫЙ') {
          setFastestAction(value)
        }
        if (value === 'ОПТИМАЛЬНЫЙ') {
          setOptimalAction(value)
        }
      }}
      block
    />
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFastestAction: (value) => {
      dispatch(setFastest(value))
    },
    setCheapestAction: (value) => {
      dispatch(setCheapest(value))
    },
    setOptimalAction: (value) => {
      dispatch(setOptimal(value))
    },
  }
}

export default connect(null, mapDispatchToProps)(Sort)
