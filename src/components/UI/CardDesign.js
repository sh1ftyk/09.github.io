import React from 'react'
import { Col, Row, Layout } from 'antd'

import './CardDesign.scss'
import TicketsSegment from '../Tickets/TicketsSegment'

const { Content } = Layout
const CardDesign = ({ price, carrier, segments }) => {
  const formatPrice = (price = 0) => {
    return `${price.toString().slice(0, -3)} ${price.toString().slice(-3)} ₽`
  }

  return (
    <Content className="content">
      <Row className="first-row" justify="space-between">
        <Col className="price">{formatPrice(price)}</Col>
        <Col className="company-logo">
          <img src={`//pics.avs.io/99/36/${carrier}.png`} />
        </Col>
      </Row>
      {segments.map((segment) => (
        <TicketsSegment {...segment} key={segment.duration + segment.date + price} />
      ))}
    </Content>
  )
}

export default CardDesign
