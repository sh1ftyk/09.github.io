import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Layout, Flex, Button } from 'antd'

import logo from '../../img/logo.svg'
import { fetchTickets, ticketsCounterReducer } from '../../store/reducer'
import './Wrapper.scss'
import Sort from '../Sort/Sort'
import Tickets from '../Tickets/Tickets'

import SiderDesign from './SiderDesign'
import Loading from './Loading'
import ServerError from './ServerError'

const Wrapper = ({ fetchTickets, actionLoading, actionError, actionNothingFound, ticketsCounterReducer }) => {
  useEffect(() => {
    fetchTickets()
  }, [])

  const addTickets = () => {
    ticketsCounterReducer(5)
  }
  return actionError > 10 ? (
    <ServerError getTickets={fetchTickets} />
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
            {!actionNothingFound && (
              <Button className="button" size="large" type="primary" onClick={addTickets}>
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
  return {
    actionLoading: state.actionLoading,
    actionError: state.actionError,
    actionNothingFound: state.actionNothingFound,
  }
}

export default connect(mapStateToProps, { fetchTickets, ticketsCounterReducer })(Wrapper)
