import React, { useState } from 'react'
import { Checkbox, ConfigProvider } from 'antd'
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
          controlInteractiveSize: 30,
        },
      }}
    >
      <Checkbox
        style={{ paddingBottom: '2em' }}
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Все
      </Checkbox>
      <CheckboxGroup
        style={{ flexDirection: 'column', gap: '1.5em' }}
        options={flightOptions}
        value={checkedList}
        onChange={onChange}
      />
    </ConfigProvider>
  )
}
export default Filters
