import React from 'react'
import { Button, Result } from 'antd'
import { SyncOutlined, FireFilled } from '@ant-design/icons'

import './ServerError.scss'

const ServerError = ({ getTickets }) => {
  return (
    <Result
      className="server-error"
      status="error"
      title="Ой! Ошибка сервера - 500."
      subTitle="Наши специалисты уже летят на помощь!"
      icon={<FireFilled />}
      extra={
        <Button type="primary" size="large" icon={<SyncOutlined />} key="warning" onClick={getTickets}>
          Повторить поиск
        </Button>
      }
    />
  )
}

export default ServerError
