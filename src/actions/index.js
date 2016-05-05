import fetchPeopleRequest from '../requests/people'

export const fetchPeople = (search) => {
  return {
    type: 'FETCH_PEOPLE',
    payload: fetchPeopleRequest(search)
  }
}
