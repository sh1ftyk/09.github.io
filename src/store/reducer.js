/* eslint-disable indent */
import { combineReducers } from 'redux'

import { SET_TAB, SET_TICKETS, CHECK_ALL, CHECK_ONE, LOADING_TICKETS } from './action'

export const tabNames = ['CАМЫЙ ДЕШЁВЫЙ', 'САМЫЙ БЫСТРЫЙ', 'ОПТИМАЛЬНЫЙ']
export const defaultCheckedList = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']

const initialTabState = { actionTab: tabNames[0] }
const initialFilterState = { actionFilter: defaultCheckedList }

const ticketsReducer = (state = { tickets: [] }, action) => {
  switch (action.type) {
    case SET_TICKETS:
      return { ...state, tickets: action.value }
    default:
      return state
  }
}

const tabReducer = (state = initialTabState, action) => {
  switch (action.type) {
    case SET_TAB:
      return { ...state, actionTab: action.value }
    default:
      return state
  }
}

const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case CHECK_ALL:
      return { ...state, actionFilter: action.value }
    case CHECK_ONE:
      return { ...state, actionFilter: action.value }
    default:
      return state
  }
}

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case LOADING_TICKETS:
      return action.value
    default:
      return state
  }
}

export default combineReducers({
  ticketsReducer,
  tabReducer,
  filterReducer,
  loadingReducer,
})
