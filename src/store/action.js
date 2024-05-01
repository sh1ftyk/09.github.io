export const SET_FASTEST = 'SET_FASTEST'
export const SET_CHEAPEST = 'SET_CHEAPEST'
export const SET_OPTIMAL = 'SET_OPTIMAL'
export const SET_TICKETS = 'SET_TICKETS'

export const CHECK_ALL = 'CHECK_ALL'
export const UNCHECK = 'UNCHECK'
export const CHECK_ONE = 'CHECK_ONE'
export const CHECK_TWO = 'CHECK_TWO'
export const CHECK_THREE = 'CHECK_THREE'

export const setFastest = (value) => {
  return { type: SET_FASTEST, value }
}

export const setCheapest = (value) => {
  return { type: SET_CHEAPEST, value }
}

export const setOptimal = (value) => {
  return { type: SET_OPTIMAL, value }
}

export const setTickets = (value) => {
  return { type: SET_TICKETS, value }
}

export const setCheckAll = (value) => {
  return { type: CHECK_ALL, value }
}

export const setUncheck = (value) => {
  return { type: UNCHECK, value }
}

export const setCheckOne = (value) => {
  return { type: CHECK_ONE, value }
}

export const setCheckTwo = (value) => {
  return { type: CHECK_TWO, value }
}

export const setCheckThree = (value) => {
  return { type: CHECK_THREE, value }
}
