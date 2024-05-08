import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import getTickets from '../services/TicketService'

export const tabNames = ['ДЕШЁВЫЙ', 'БЫСТРЫЙ', 'ОПТИМАЛЬНЫЙ']
export const defaultCheckedList = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']

const initialState = {
  tickets: [],
  actionTab: tabNames[0],
  actionFilter: defaultCheckedList,
  actionLoading: true,
  actionError: 0,
  actionNothingFound: false,
  actionTicketsCounter: 5,
}

const rootReducers = createSlice({
  name: 'rootReducers',
  initialState,
  reducers: {
    ticketsReducer(state, action) {
      return { ...state, tickets: [...state.tickets, ...action.payload.tickets], stop: action.payload.stop }
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
      return { ...state, actionError: action.payload + state.actionError }
    },

    nothingFoundReducer(state, action) {
      return { ...state, actionNothingFound: action.payload }
    },

    ticketsCounterReducer(state, action) {
      return { ...state, actionTicketsCounter: action.payload + state.actionTicketsCounter }
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
  ticketsCounterReducer,
} = rootReducers.actions

export const fetchTickets = createAsyncThunk('aviasales/fetchTickets', async (pl, api) => {
  const loop = async () => {
    let part = await getTickets()
    api.dispatch(ticketsReducer(part))
    if (part.error) {
      api.dispatch(serverErrorReducer(1))
    }

    if (!part.stop) {
      loop()
    } else {
      api.dispatch(loadingReducer(false))
    }
  }
  await loop()
})

export default rootReducers.reducer
