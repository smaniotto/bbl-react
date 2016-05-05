import axios from 'axios'

const MEMBERS_ENDPOINT = 'http://su-directory-backend-dev.herokuapp.com/api/v1/members/';
const fetchPeopleRequest = (search) => {
  const params = {
    search: search,
    fieldset: 'small'
  }
  return axios.get(MEMBERS_ENDPOINT, {params: params})
}


export default fetchPeopleRequest
