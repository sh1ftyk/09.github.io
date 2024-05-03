export default class TicketService {
  baseUrl = 'https://aviasales-test-api.kata.academy'

  getData(url) {
    return fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.tickets || res.stop) return { stop: res.stop, tickets: res.tickets, error: false }
      })
      .catch(() => {
        return { stop: false, tickets: [], error: true }
      })
  }

  getSearchId() {
    const searchId = sessionStorage.getItem('searchId')
    if (searchId) {
      return searchId
    }
    return fetch(`${this.baseUrl}/search`)
      .then((res) => res.json())
      .then(({ searchId }) => {
        sessionStorage.setItem('searchId', searchId)
        return searchId
      })
  }

  async getTickets() {
    const searchId = await this.getSearchId()
    let url = `${this.baseUrl}/tickets?searchId=${searchId}`
    const res = await this.getData(url)
    if (res.stop) sessionStorage.removeItem('searchId')

    return res
  }
}
