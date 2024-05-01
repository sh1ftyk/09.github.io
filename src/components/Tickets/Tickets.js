import React from 'react'
import { connect } from 'react-redux'

import CardDesign from '../UI/CardDesign'
import { tabName } from '../../store/reducer'

import './Tickets.scss'

const Tickets = ({ tickets = [], actionTab }) => {
  const getCheapest = () => tickets.sort((a, b) => a.price - b.price)
  const getFastest = () =>
    tickets.sort((a, b) => {
      return a?.segments[0].duration + a?.segments[1].duration - (b?.segments[0].duration + b?.segments[1].duration)
    })
  const getOptimal = () => tickets

  const TICKETS = {
    [tabName[0]]: getCheapest,
    [tabName[1]]: getFastest,
    [tabName[2]]: getOptimal,
  }
  console.log(TICKETS)
  return TICKETS[actionTab]().map((ticket) => (
    <CardDesign {...ticket} key={ticket.price + ticket.carrier + ticket.segments[0].date} />
  ))
}

const mapStateToProps = (state) => {
  return { tickets: state.ticketsReducer.tickets, actionTab: state.tabReducer.actionTab }
}

export default connect(mapStateToProps)(Tickets)
