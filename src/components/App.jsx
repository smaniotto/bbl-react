import React from 'react'
import PeopleListPage from '../containers/PeopleListPage.jsx'

const styles = {
  app: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    color: '#000000'
  }
}

const App = () => (
  <div style={styles.app}>
    <PeopleListPage/>
  </div>
)

export default App
