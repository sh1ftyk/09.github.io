import React from 'react'
import { ConfigProvider } from 'antd'

import Wrapper from '../UI/Wrapper'
const theme = {
  token: {
    controlInteractiveSize: 22,
  },
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
}
const App = () => {
  return (
    <ConfigProvider theme={theme}>
      <Wrapper />
    </ConfigProvider>
  )
}

export default App
