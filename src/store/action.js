export const SET_TAB = 'SET_TAB'

export const SET_TICKETS = 'SET_TICKETS'

export const CHECK_ALL = 'CHECK_ALL'
export const CHECK_ONE = 'CHECK_ONE'

export const LOADING_TICKETS = 'LOADING_TICKETS'

export const SERVER_ERROR = 'SERVER_ERROR'

export const NOTHING_FOUND = 'NOTHING_FOUND'

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

export const setServerError = (value) => {
  return { type: SERVER_ERROR, value }
}

export const setNothingFound = (value) => {
  return { type: NOTHING_FOUND, value }
}
