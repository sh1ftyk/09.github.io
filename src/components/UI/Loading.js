import React from 'react'
import { Spin } from 'antd'

import './Loading.scss'

const Loading = () => (
  <Spin tip="Билеты загружаются..." size="large">
    <div className="content" />
  </Spin>
)

export default Loading
