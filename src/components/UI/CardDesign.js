import React from 'react'
import { Col, Row } from 'antd'

import companyLogo from '../../img/Header.svg'

const CardDesign = () => (
  <>
    <Row style={{ padding: '3em', lineHeight: '36px' }} justify="space-between">
      <Col style={{ fontSize: '36px', color: 'rgba(33, 150, 243, 1)' }}>13 400 ₽</Col>
      <Col>
        <img src={companyLogo} />
      </Col>
    </Row>
    <Row gutter={[8, 8]} style={{ padding: '0 3.2em 3em', lineHeight: '18px', textAlign: 'left', color: 'gray' }}>
      <Col style={{ fontSize: '18px' }} span={8}>
        MOW-HKT
      </Col>
      <Col style={{ fontSize: '18px' }} span={8}>
        В ПУТИ
      </Col>
      <Col style={{ fontSize: '18px' }} span={8}>
        2 ПЕРЕСАДКИ
      </Col>
      <Col style={{ fontSize: '20px', color: 'black' }} span={8}>
        10:45 - 08:00
      </Col>
      <Col style={{ fontSize: '20px', color: 'black' }} span={8}>
        21ч 15м
      </Col>
      <Col style={{ fontSize: '20px', color: 'black' }} span={8}>
        HKG, JNB
      </Col>
    </Row>
    <Row gutter={[8, 8]} style={{ padding: '0 3.2em', lineHeight: '18px', textAlign: 'left', color: 'gray' }}>
      <Col style={{ fontSize: '18px' }} span={8}>
        HKT-MOW
      </Col>
      <Col style={{ fontSize: '18px' }} span={8}>
        В ПУТИ
      </Col>
      <Col style={{ fontSize: '18px' }} span={8}>
        1 ПЕРЕСАДКА
      </Col>
      <Col style={{ fontSize: '20px', color: 'black' }} span={8}>
        11:20 - 00:50
      </Col>
      <Col style={{ fontSize: '20px', color: 'black' }} span={8}>
        13ч 30м
      </Col>
      <Col style={{ fontSize: '20px', color: 'black' }} span={8}>
        HKG
      </Col>
    </Row>
  </>
)

export default CardDesign
