import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Layout, Flex, Button } from 'antd'

import logo from '../../img/logo.svg'
import { getTickets } from '../../services/TicketService'
import { ticketsReducer, loadingReducer, serverErrorReducer } from '../../store/reducer'
import './Wrapper.scss'
import Sort from '../Sort/Sort'
import Tickets from '../Tickets/Tickets'

import SiderDesign from './SiderDesign'
import Loading from './Loading'
import ServerError from './ServerError'

const Wrapper = ({
  ticketsReducer,
  loadingReducer,
  serverErrorReducer,
  actionLoading,
  actionError,
  actionNothingFound,
}) => {
  const fetchTickets = async () => {
    serverErrorReducer(false)
    loadingReducer(true)
    const res = await getTickets()
    loadingReducer(false)
    if (res.tickets.length === 0) {
      serverErrorReducer(true)
    }
    ticketsReducer(res?.tickets.slice(0, 50))
  }

  useEffect(() => {
    fetchTickets()
  }, [])

  return (
    <>
      {actionError ? (
        <ServerError getTickets={getTickets} />
      ) : (
        <>
          <div className="logo">
            <img src={logo} />
          </div>
          <Flex className="wrapper" gap="middle" wrap="wrap">
            <Layout className="layout" hasSider>
              <SiderDesign />
              <Layout style={{ width: 'auto' }}>
                {!actionNothingFound && <Sort />}
                {actionLoading && <Loading />}
                <Tickets />
                {!actionLoading && !actionNothingFound && (
                  <Button className="button" size="large" type="primary">
                    ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!
                  </Button>
                )}
              </Layout>
            </Layout>
          </Flex>
        </>
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    actionLoading: state.actionLoading,
    actionError: state.actionError,
    actionNothingFound: state.actionNothingFound,
  }
}

export default connect(mapStateToProps, { ticketsReducer, loadingReducer, serverErrorReducer })(Wrapper)
