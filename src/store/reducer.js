/* eslint-disable indent */
import { combineReducers } from 'redux'

import { SET_FASTEST, SET_CHEAPEST, SET_OPTIMAL, SET_TICKETS, CHECK_ALL, CHECK_ONE } from './action'

export const tabName = ['CАМЫЙ ДЕШЁВЫЙ', 'САМЫЙ БЫСТРЫЙ', 'ОПТИМАЛЬНЫЙ']
const initialTabState = { actionTab: tabName[0] }
export const defaultCheckedList = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']
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
    case SET_FASTEST:
      return { ...state, actionTab: action.value }
    case SET_CHEAPEST:
      return { ...state, actionTab: action.value }
    case SET_OPTIMAL:
      return { ...state, actionTab: action.value }
    default:
      return state
  }
}

const filterReducer = (state = initialFilterState, action) => {
  console.log(action)
  switch (action.type) {
    case CHECK_ALL:
      return { ...state, actionFilter: action.value }
    case CHECK_ONE:
      return { ...state, actionFilter: action.value }
    default:
      return state
  }
}

export default combineReducers({
  ticketsReducer,
  tabReducer,
  filterReducer,
})
