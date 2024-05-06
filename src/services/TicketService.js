const baseUrl = 'https://aviasales-test-api.kata.academy'

const getData = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      if (res.tickets || res.stop) return { stop: res.stop, tickets: res.tickets, error: false }
    })
    .catch(() => {
      return { stop: false, tickets: [], error: true }
    })
}

const getSearchId = () => {
  const searchId = sessionStorage.getItem('searchId')
  if (searchId) {
    return searchId
  }
  return fetch(`${baseUrl}/search`)
    .then((res) => res.json())
    .then(({ searchId }) => {
      sessionStorage.setItem('searchId', searchId)
      return searchId
    })
}

export const getTickets = async () => {
  const searchId = await getSearchId()
  let url = `${baseUrl}/tickets?searchId=${searchId}`
  const res = await getData(url)

  if (res.stop) {
    sessionStorage.removeItem('searchId')
  }
  return res
}
