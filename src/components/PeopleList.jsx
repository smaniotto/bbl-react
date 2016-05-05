import React, {Component, PropTypes} from 'react'
import PersonCard from './PersonCard.jsx'

class PeopleList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cards = this.props.people.map(function(person) {
      return <PersonCard person={person} key={person.id}/>;
    });

    return (
      <div className="people-list">
        {cards}
      </div>
    );
  }
}

PeopleList.propTypes = {
  people: PropTypes.array.isRequired
}

export default PeopleList
