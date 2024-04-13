import React, { useState } from 'react'
import { Checkbox, ConfigProvider } from 'antd'
import './Filter.scss'

const CheckboxGroup = Checkbox.Group
const flightOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']
const defaultCheckedList = ['Без пересадок']
const Filters = () => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList)
  const checkAll = flightOptions.length === checkedList.length
  const indeterminate = checkedList.length > 0 && checkedList.length < flightOptions.length
  const onChange = (list) => {
    setCheckedList(list)
  }
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? flightOptions : [])
  }
  return (
    <ConfigProvider
      theme={{
        token: {
          controlInteractiveSize: 22,
        },
      }}
    >
      <Checkbox className="check-box" indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Все
      </Checkbox>
      <CheckboxGroup className="check-box-group" options={flightOptions} value={checkedList} onChange={onChange} />
    </ConfigProvider>
  )
}
export default Filters
