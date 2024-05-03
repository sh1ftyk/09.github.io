import React from 'react'
import { connect } from 'react-redux'
import { Checkbox } from 'antd'

import { defaultCheckedList } from '../../store/reducer'
import { setCheckAll, setCheckOne } from '../../store/action'
import './Filter.scss'

const CheckboxGroup = Checkbox.Group

const Filters = ({ setCheckAllAction, setCheckOneAction, actionFilter }) => {
  const checkAll = defaultCheckedList.length === actionFilter.length
  const indeterminate = actionFilter.length > 0 && actionFilter.length < defaultCheckedList.length

  const filtersChange = (value) => {
    setCheckOneAction(value)
  }

  const checkAllFilters = (e) => {
    setCheckAllAction(e.target.checked ? defaultCheckedList : [])
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
