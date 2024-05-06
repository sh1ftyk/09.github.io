import React from 'react'
import { connect } from 'react-redux'
import { Checkbox } from 'antd'

import { filterReducer, defaultCheckedList } from '../../store/reducer'
import './Filter.scss'

const CheckboxGroup = Checkbox.Group

const Filters = ({ filterReducer, actionFilter }) => {
  const checkAll = defaultCheckedList.length === actionFilter.length
  const indeterminate = actionFilter.length > 0 && actionFilter.length < defaultCheckedList.length

  const filtersChange = (value) => {
    filterReducer(value)
  }

  const checkAllFilters = (e) => {
    filterReducer(e.target.checked ? defaultCheckedList : [])
  }
  return (
    <>
      <Checkbox className="check-box" indeterminate={indeterminate} onChange={checkAllFilters} checked={checkAll}>
        Все
      </Checkbox>
      <CheckboxGroup
        className="check-box-group"
        options={defaultCheckedList}
        value={actionFilter}
        onChange={filtersChange}
      />
    </>
  )
}
const mapStateToProps = (state) => {
  return { actionFilter: state.actionFilter }
}

export default connect(mapStateToProps, { filterReducer })(Filters)
