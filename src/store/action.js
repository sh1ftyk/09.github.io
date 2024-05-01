export const SET_TAB = 'SET_TAB'

export const SET_TICKETS = 'SET_TICKETS'

export const CHECK_ALL = 'CHECK_ALL'
export const CHECK_ONE = 'CHECK_ONE'

export const LOADING_TICKETS = 'LOADING_TICKETS'

export const setTab = (value) => {
  return { type: SET_TAB, value }
}

export const setTickets = (value) => {
  return { type: SET_TICKETS, value }
}

export const setCheckAll = (value) => {
  return { type: CHECK_ALL, value }
}

export const setCheckOne = (value) => {
  return { type: CHECK_ONE, value }
}

export const setLoading = (value) => {
  return { type: LOADING_TICKETS, value }
}
