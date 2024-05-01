import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Layout, Flex, Button } from 'antd'

import TicketService from '../../services/TicketService'
import logo from '../../img/logo.svg'
import { setTickets } from '../../store/action'
import './Wrapper.scss'
import Sort from '../Sort/Sort'
import Tickets from '../Tickets/Tickets'

import SiderDesign from './SiderDesign'

const ticketService = new TicketService()

const Wrapper = ({ setTicketsAction }) => {
  const getTickets = async () => {
    const res = await ticketService.getTickets()
    setTicketsAction(res?.tickets.slice(0, 100))
  }

  useEffect(() => {
    getTickets()
  }, [])

  return (
    <>
      <div className="logo">
        <img src={logo} />
      </div>
      <Flex className="wrapper" gap="middle" wrap="wrap">
        <Layout className="layout" hasSider>
          <SiderDesign />
          <Layout style={{ width: 'auto' }}>
            <Sort />
            <Tickets />
            <Button className="button" size="large" type="primary">
              ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!
            </Button>
          </Layout>
        </Layout>
      </Flex>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTicketsAction: (value) => {
      dispatch(setTickets(value))
    },
  }
}

export default connect(null, mapDispatchToProps)(Wrapper)
