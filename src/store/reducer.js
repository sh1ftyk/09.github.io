// /* eslint-disable indent */
// import { combineReducers } from 'redux'

// import { SET_TAB, SET_TICKETS, CHECK_ALL, CHECK_ONE, LOADING_TICKETS, SERVER_ERROR, NOTHING_FOUND } from './action'

// export const tabNames = ['ДЕШЁВЫЙ', 'БЫСТРЫЙ', 'ОПТИМАЛЬНЫЙ']
// export const defaultCheckedList = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']

// const initialTabState = { actionTab: tabNames[0] }
// const initialFilterState = { actionFilter: defaultCheckedList }

// const ticketsReducer = (state = { tickets: [] }, action) => {
//   switch (action.type) {
//     case SET_TICKETS:
//       return { ...state, tickets: action.value }
//     default:
//       return state
//   }
// }

// const tabReducer = (state = initialTabState, action) => {
//   switch (action.type) {
//     case SET_TAB:
//       return { ...state, actionTab: action.value }
//     default:
//       return state
//   }
// }

// const filterReducer = (state = initialFilterState, action) => {
//   switch (action.type) {
//     case CHECK_ALL:
//       return { ...state, actionFilter: action.value }
//     case CHECK_ONE:
//       return { ...state, actionFilter: action.value }
//     default:
//       return state
//   }
// }

// const loadingReducer = (state = false, action) => {
//   switch (action.type) {
//     case LOADING_TICKETS:
//       return action.value
//     default:
//       return state
//   }
// }

// const serverErrorReducer = (state = false, action) => {
//   switch (action.type) {
//     case SERVER_ERROR:
//       return action.value
//     default:
//       return state
//   }
// }

// const nothingFoundReducer = (state = false, action) => {
//   switch (action.type) {
//     case NOTHING_FOUND:
//       return action.value
//     default:
//       return state
//   }
// }

// export default combineReducers({
//   ticketsReducer,
//   tabReducer,
//   filterReducer,
//   loadingReducer,
//   serverErrorReducer,
//   nothingFoundReducer,
// })

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getTickets } from '../services/TicketService'

export const tabNames = ['ДЕШЁВЫЙ', 'БЫСТРЫЙ', 'ОПТИМАЛЬНЫЙ']
export const defaultCheckedList = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']

const initialState = {
  tickets: [],
  actionTab: tabNames[0],
  actionFilter: defaultCheckedList,
  actionLoading: false,
  actionError: 0,
  actionNothingFound: false,
  actionShowTickets: 5,
}

const rootReducers = createSlice({
  name: 'rootReducers',
  initialState,
  reducers: {
    ticketsReducer(state, action) {
      return { ...state, tickets: action.payload }
    },
    tabReducer(state, action) {
      return { ...state, actionTab: action.payload }
    },

    filterReducer(state, action) {
      return { ...state, actionFilter: action.payload }
    },

    loadingReducer(state, action) {
      return { ...state, actionLoading: action.payload }
    },

    serverErrorReducer(state, action) {
      return { ...state, actionError: action.payload }
    },

    nothingFoundReducer(state, action) {
      return { ...state, actionNothingFound: action.payload }
    },

    showTicketsReducer(state) {
      return { ...state, actionShowTickets: state.actionShowTickets + 5 }
    },

    addTicketsReducer(state, action) {
      const { stop: actionStop, error, tickets } = action.payload
      return {
        ...state,
        actionLoading: actionStop,
        actionError: error ? state.actionError + 1 : state.actionError,
        tickets: [...state.tickets, ...tickets],
      }
    },
  },
})

export const {
  ticketsReducer,
  tabReducer,
  filterReducer,
  loadingReducer,
  serverErrorReducer,
  nothingFoundReducer,
  showTicketsReducer,
  addTicketsReducer,
} = rootReducers.actions

export const fetchTickets = createAsyncThunk('TicketService/getData', async (pl, api) => {
  const loop = async () => {
    let part = await getTickets()
    api.dispatch(addTicketsReducer(part))
    if (!part.stop) {
      loop()
    }
  }
  await loop()
})
export default rootReducers.reducer
