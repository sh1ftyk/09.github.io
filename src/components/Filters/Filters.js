import React from 'react'
import { connect } from 'react-redux'
import { Checkbox } from 'antd'

import { setCheckAll, setCheckOne } from '../../store/action'
import './Filter.scss'

const CheckboxGroup = Checkbox.Group

const flightOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']

const Filters = ({ setCheckAllAction, setCheckOneAction, actionFilter }) => {
  const checkAll = flightOptions.length === actionFilter.length
  const indeterminate = actionFilter.length > 0 && actionFilter.length < flightOptions.length

  const onChange = (value) => {
    setCheckOneAction(value)
  }
  const onCheckAllChange = (e) => {
    setCheckAllAction(e.target.checked ? flightOptions : [])
  }
  return (
    <>
      <Checkbox className="check-box" indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Все
      </Checkbox>
      <CheckboxGroup className="check-box-group" options={flightOptions} value={actionFilter} onChange={onChange} />
    </>
  )
}
const mapStateToProps = (state) => {
  return { actionFilter: state.filterReducer.actionFilter }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCheckAllAction: (value) => {
      dispatch(setCheckAll(value))
    },
    setCheckOneAction: (value) => {
      dispatch(setCheckOne(value))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
