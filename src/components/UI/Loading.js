import React from 'react'
import { Skeleton } from 'antd'

import './Loading.scss'
const { Button } = Skeleton
const Loading = () => (
  <>
    <div className="loading">
      <Button active size="large" shape="round"></Button>
      <Button active size="large" shape="round"></Button>
      <Button active size="small" shape="round" block></Button>
      <Button active size="small" shape="round" block></Button>
      <Button active size="small" shape="round" block></Button>
    </div>
  </>
)

export default Loading
