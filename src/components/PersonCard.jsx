import React, {Component, PropTypes} from 'react'

const styles = {
  card: {
    margin: '15px',
    border: '2px solid black',
    padding: '15px',
    width: '300px'
  },
  name: {
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#444444'
  },
  location: {
    fontWeight: 'normal',
    fontSize: '12px',
    color: '#a3a3a3'
  }
}

const PersonCard = (props) => (
  <div style={styles.card}>
    <div style={styles.name}>
      {props.person.first_name}&nbsp;{props.person.last_name}
    </div>
    <div style={styles.location}>
      {props.person.city},&nbsp;{props.person.country}
    </div>
  </div>
);

PersonCard.propTypes = {
  person: PropTypes.object.isRequired
}

export default PersonCard;
