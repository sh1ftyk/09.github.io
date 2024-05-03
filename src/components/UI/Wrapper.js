import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Layout, Flex, Button } from 'antd'

import TicketService from '../../services/TicketService'
import logo from '../../img/logo.svg'
import { setTickets, setLoading, setServerError } from '../../store/action'
import './Wrapper.scss'
import Sort from '../Sort/Sort'
import Tickets from '../Tickets/Tickets'

import SiderDesign from './SiderDesign'
import Loading from './Loading'
import ServerError from './ServerError'

const ticketService = new TicketService()

const Wrapper = ({ setTicketsAction, setLoadingAction, setServerErrorAction, loading, serverError, nothingFound }) => {
  const getTickets = async () => {
    setServerErrorAction(false)
    setLoadingAction(true)
    const res = await ticketService.getTickets()
    setLoadingAction(false)
    if (res.tickets.length === 0) {
      setServerErrorAction(true)
    }
    setTicketsAction(res?.tickets.slice(0, 50))
  }

  useEffect(() => {
    getTickets()
  }, [])

  return (
    <>
      {serverError ? (
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
                {!nothingFound && <Sort />}
                {loading && <Loading />}
                <Tickets />
                {!loading && !nothingFound && (
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
    loading: state.loadingReducer,
    serverError: state.serverErrorReducer,
    nothingFound: state.nothingFoundReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTicketsAction: (value) => {
      dispatch(setTickets(value))
    },
    setLoadingAction: (value) => {
      dispatch(setLoading(value))
    },
    setServerErrorAction: (value) => {
      dispatch(setServerError(value))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)
