import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Layout, Flex, Button } from 'antd'

import TicketService from '../../services/TicketService'
import logo from '../../img/logo.svg'
import { setTickets, setLoading } from '../../store/action'
import './Wrapper.scss'
import Sort from '../Sort/Sort'
import Tickets from '../Tickets/Tickets'

import SiderDesign from './SiderDesign'
import Loading from './Loading'

const ticketService = new TicketService()

const Wrapper = ({ setTicketsAction, setLoadingAction, loading }) => {
  const getTickets = async () => {
    setLoadingAction(true)
    const res = await ticketService.getTickets()
    setLoadingAction(false)
    setTicketsAction(res?.tickets.slice(0, 50))
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
            {loading && <Loading />}
            <Tickets />
            {!loading && (
              <Button className="button" size="large" type="primary">
                ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!
              </Button>
            )}
          </Layout>
        </Layout>
      </Flex>
    </>
  )
}

const mapStateToProps = (state) => {
  return { loading: state.loadingReducer }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTicketsAction: (value) => {
      dispatch(setTickets(value))
    },
    setLoadingAction: (value) => {
      dispatch(setLoading(value))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)
