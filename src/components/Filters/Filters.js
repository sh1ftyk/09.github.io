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

  const filtersChange = (value) => {
    console.log(value)
    setCheckOneAction(value)
  }
  const checkAllFilters = (e) => {
    setCheckAllAction(e.target.checked ? flightOptions : [])
  }
  return (
    <>
      <Checkbox className="check-box" indeterminate={indeterminate} onChange={checkAllFilters} checked={checkAll}>
        Все
      </Checkbox>
      <CheckboxGroup
        className="check-box-group"
        options={flightOptions}
        value={actionFilter}
        onChange={filtersChange}
      />
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
