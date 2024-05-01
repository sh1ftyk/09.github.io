export default class TicketService {
  baseUrl = 'https://aviasales-test-api.kata.academy'

  async getData(url) {
    try {
      const res = await fetch(url)
      const resJson = await res.json()
      if (resJson.tickets || resJson.stop) {
        return { stop: resJson.stop, tickets: resJson.tickets, error: false }
      }
      return resJson
    } catch (err) {
      console.log('Trouble with fetch: ', err.message)
      sessionStorage.removeItem('searchId')
      await this.getSearchId()
    }
  }

  async getSearchId() {
    const searchId = sessionStorage.getItem('searchId')
    if (searchId) {
      return searchId
    }
    const url = `${this.baseUrl}/search`
    const body = await this.getData(url)
    sessionStorage.setItem('searchId', body.searchId)
    return body.searchId
  }

  async getTickets() {
    const searchId = await this.getSearchId()
    const url = `${this.baseUrl}/tickets?searchId=${searchId}`
    const body = await this.getData(url)
    return body
  }
}
