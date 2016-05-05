import React, {Component, PropTypes} from 'react'

const PeopleList = (props) => (
  <div>{props.people.length}</div>
);

PeopleList.propTypes = {
  people: PropTypes.array.isRequired
}

export default PeopleList;
