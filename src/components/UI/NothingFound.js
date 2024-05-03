import React from 'react'
import { connect } from 'react-redux'
import { ConfigProvider, Result, Button } from 'antd'
import { MehOutlined, FilterFilled } from '@ant-design/icons'

import './NothingFound.scss'
import { setCheckAll } from '../../store/action'
import { defaultCheckedList } from '../../store/reducer'

const NothingFound = ({ setCheckAllAction }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Result: {
            iconFontSize: 72,
            titleFontSize: 24,
            subtitleFontSize: 16,
          },
        },
      }}
    >
      <div className="nothing-found">
        <Result
          title="Упс! Билеты не найдены."
          subTitle="Попробуйте изменить фильтры или нажмите кнопку ниже."
          icon={<MehOutlined />}
          extra={
            <Button
              type="primary"
              size="large"
              key="warning"
              icon={<FilterFilled />}
              onClick={() => setCheckAllAction(defaultCheckedList)}
            >
              Сбросить фильтры
            </Button>
          }
        />
      </div>
    </ConfigProvider>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCheckAllAction: (value) => {
      dispatch(setCheckAll(value))
    },
  }
}

export default connect(null, mapDispatchToProps)(NothingFound)
