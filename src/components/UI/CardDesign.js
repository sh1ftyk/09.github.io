import React from 'react'
import { Col, Row } from 'antd'
import './CardDesign.scss'

import companyLogo from '../../img/Header.svg'

const CardDesign = () => (
  <>
    <Row className="first-row" justify="space-between">
      <Col className="price">13 400 ₽</Col>
      <Col className="company-logo">
        <img src={companyLogo} />
      </Col>
    </Row>
    <Row className="second-row" gutter={[8, 8]}>
      <Col className="second-row__first-col" span={8}>
        MOW-HKT
      </Col>
      <Col className="second-row__first-col" span={8}>
        В ПУТИ
      </Col>
      <Col className="second-row__first-col" span={8}>
        2 ПЕРЕСАДКИ
      </Col>
      <Col className="second-row__second-col" span={8}>
        10:45 - 08:00
      </Col>
      <Col className="second-row__second-col" span={8}>
        21ч 15м
      </Col>
      <Col className="second-row__second-col" span={8}>
        HKG, JNB
      </Col>
    </Row>
    <Row className="third-row" gutter={[8, 8]}>
      <Col className="third-row__first-col" span={8}>
        HKT-MOW
      </Col>
      <Col className="third-row__first-col" span={8}>
        В ПУТИ
      </Col>
      <Col className="third-row__first-col" span={8}>
        1 ПЕРЕСАДКА
      </Col>
      <Col className="third-row__second-col" span={8}>
        11:20 - 00:50
      </Col>
      <Col className="third-row__second-col" span={8}>
        13ч 30м
      </Col>
      <Col className="third-row__second-col" span={8}>
        HKG
      </Col>
    </Row>
  </>
)

export default CardDesign
