import React from 'react'
import { Layout, Flex, Segmented, ConfigProvider, Button } from 'antd'

import siteLogo from '../../img/siteLogo.svg'

import Filters from './Filters'
import CardDesign from './CardDesign'

const { Sider, Content } = Layout

const layoutStyle = {
  maxWidth: '100vw',
  padding: '2em 15em',
  overflow: 'hidden',
  margin: 'auto',
}
const siderStyle = {
  maxHeight: '25em',
  marginRight: '2em',
  padding: '1.4em 2em',
  color: 'black',
  backgroundColor: 'white',
  boxShadow: '0px 5px 10px 2px rgba(34, 60, 80, 0.2)',
  borderRadius: 10,
}
const contentStyle = {
  height: '18.6em',
  marginTop: '2em',
  textAlign: 'center',
  lineHeight: '120px',
  color: 'black',
  backgroundColor: 'white',
  boxShadow: '0px 5px 10px 2px rgba(34, 60, 80, 0.2)',
  borderRadius: 10,
}
const segmentedStyle = {
  height: '70px',
  padding: '0',
  boxShadow: '0px 5px 10px 2px rgba(34, 60, 80, 0.2)',
  borderRadius: 10,
}

const buttonStyle = {
  height: '70px',
  marginTop: '2em',
}

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
        },
      },
    }}
  >
    <div style={{ paddingTop: '2em', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
      <img src={siteLogo} />
    </div>
    <Flex gap="middle" wrap="wrap">
      <Layout style={layoutStyle}>
        <Sider width="35%" style={siderStyle}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2em' }}>
            <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
            <Filters />
          </div>
        </Sider>
        <Layout>
          <Segmented
            style={segmentedStyle}
            size="large"
            options={['CАМЫЙ ДЕШЁВЫЙ', 'САМЫЙ БЫСТРЫЙ', 'ОПТИМАЛЬНЫЙ']}
            block
          />
          <Content style={contentStyle}>
            <CardDesign />
          </Content>
          <Content style={contentStyle}>Content</Content>
          <Content style={contentStyle}>Content</Content>

          <Button style={buttonStyle} size="large" type="primary">
            ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!
          </Button>
        </Layout>
      </Layout>
    </Flex>
  </ConfigProvider>
)

export default Wrapper
