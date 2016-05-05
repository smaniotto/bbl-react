import {combineReducers} from 'redux'
import people from './people'

const peopleApp = combineReducers({
  people: people,
})

export default peopleApp
