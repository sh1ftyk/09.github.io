import React from 'react'
import { Layout, Flex, Segmented, ConfigProvider, Button } from 'antd'

import logo from '../../img/logo.svg'

import Filters from './Filters'
import CardDesign from './CardDesign'
import './Wrapper.scss'

const { Sider, Content } = Layout

const Wrapper = () => (
  <ConfigProvider
    theme={{
      components: {
        Segmented: {
          trackBg: 'white',
          itemActiveBg: 'rgba(33, 150, 243, 1)',
          itemHoverBg: '#f5f5f5',
          itemColor: 'black',
          itemHoverColor: 'black',
          itemSelectedBg: 'rgba(33, 150, 243, 1)',
          itemSelectedColor: 'white',
          controlHeightLG: 70,
          fontSizeLG: 14,
        },
      },
    }}
  >
    <div className="logo">
      <img src={logo} />
    </div>
    <Flex className="wrapper" gap="middle" wrap="wrap">
      <Layout className="layout" hasSider>
        <Sider className="sider" width="30%">
          <div className="sider__content">
            <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
            <Filters />
          </div>
        </Sider>
        <Layout style={{ width: 'auto' }}>
          <Segmented
            className="segmented"
            size="large"
            options={['CАМЫЙ ДЕШЁВЫЙ', 'САМЫЙ БЫСТРЫЙ', 'ОПТИМАЛЬНЫЙ']}
            block
          />
          <Content className="content">
            <CardDesign />
          </Content>
          <Content className="content">Content</Content>
          <Content className="content">Content</Content>

          <Button className="button" size="large" type="primary">
            ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!
          </Button>
        </Layout>
      </Layout>
    </Flex>
  </ConfigProvider>
)

export default Wrapper
