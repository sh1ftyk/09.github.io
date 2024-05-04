import React from 'react'
import { Layout } from 'antd'

import Filters from '../Filters/Filters'

const { Sider } = Layout

const SiderDesign = () => (
  <Sider className="sider" width="30%">
    <div className="sider__content">
      <p className="sider__description">КОЛИЧЕСТВО ПЕРЕСАДОК</p>
      <Filters />
    </div>
  </Sider>
)

export default SiderDesign
