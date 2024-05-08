import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import CardDesign from '../UI/CardDesign'
import { tabNames, defaultCheckedList as filterNames, nothingFoundReducer } from '../../store/reducer'
import './Tickets.scss'
import NothingFound from '../UI/NothingFound'

const Tickets = ({
  tickets,
  nothingFoundReducer,
  actionTab,
  actionFilter,
  actionLoading,
  actionNothingFound,
  actionTicketsCounter,
}) => {
  const newTicketsArr = [...tickets]

  const getCheapest = () => newTicketsArr.sort((a, b) => a.price - b.price)
  const getFastest = () =>
    newTicketsArr.sort((a, b) => {
      return a?.segments[0].duration + a?.segments[1].duration - (b?.segments[0].duration + b?.segments[1].duration)
    })
  const getOptimal = () => tickets

  const filterTickets = (tickets) =>
    tickets.filter((ticket) => {
      const firstTicketStops = ticket.segments[0].stops.length
      const secondTicketStops = ticket.segments[1].stops.length
      const directionStops = [firstTicketStops, secondTicketStops]

      if (directionStops.includes(3) && actionFilter.includes(filterNames[3])) {
        return true
      }
      if (directionStops.includes(2) && !directionStops.includes(3) && actionFilter.includes(filterNames[2])) {
        return true
      }
      if (
        directionStops.includes(1) &&
        !directionStops.includes(2) &&
        !directionStops.includes(3) &&
        actionFilter.includes(filterNames[1])
      ) {
        return true
      }
      if (firstTicketStops + secondTicketStops === 0 && actionFilter.includes(filterNames[0])) {
        return true
      }
      return false
    })

  const TICKETS = {
    [tabNames[0]]: getCheapest,
    [tabNames[1]]: getFastest,
    [tabNames[2]]: getOptimal,
  }

  const ticketsRender = filterTickets(TICKETS[actionTab]()).slice(0, actionTicketsCounter)

  useEffect(() => {
    if (!actionLoading && ticketsRender.length === 0) {
      nothingFoundReducer(true)
    } else {
      nothingFoundReducer(false)
    }
  }, [ticketsRender.length, actionLoading])

  if (actionNothingFound) {
    return <NothingFound />
  }

  return ticketsRender.map((ticket) => (
    <CardDesign {...ticket} key={ticket.price + ticket.carrier + ticket.segments[0].date} />
  ))
}

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
    actionTab: state.actionTab,
    actionFilter: state.actionFilter,
    actionLoading: state.actionLoading,
    actionNothingFound: state.actionNothingFound,
    actionTicketsCounter: state.actionTicketsCounter,
  }
}

export default connect(mapStateToProps, { nothingFoundReducer })(Tickets)
