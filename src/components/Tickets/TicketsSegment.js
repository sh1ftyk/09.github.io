import React from 'react'
import { Col, Row } from 'antd'
import { format, addMinutes } from 'date-fns'
const TicketsSegment = ({ origin, destination, date, stops, duration }) => {
  const departureDate = format(new Date(date), 'HH:mm')
  const arriveDate = format(addMinutes(new Date(date), duration), 'HH:mm')
  const m = duration % 60
  const h = (duration - m) / 60
  const travelDuration = `${h}ч ${m}м`

  return (
    <Row className="second-row" gutter={[8, 8]}>
      <Col className="second-row__first-col" span={8}>
        {origin}-{destination}
      </Col>
      <Col className="second-row__first-col" span={8}>
        В ПУТИ
      </Col>
      <Col className="second-row__first-col" span={8}>
        {stops.length} ПЕРЕСАД
        {stops.length === 1 ? 'КА' : stops.length === 0 ? 'ОК' : 'КИ'}
      </Col>
      <Col className="second-row__second-col" span={8}>
        {departureDate} - {arriveDate}
      </Col>
      <Col className="second-row__second-col" span={8}>
        {travelDuration}
      </Col>
      <Col className="second-row__second-col" span={8}>
        {stops.join(', ')}
      </Col>
    </Row>
  )
}

export default TicketsSegment
