import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {fetchPeople} from '../actions/index'
import PeopleList from '../components/PeopleList.jsx'
import SearchBox from '../components/SearchBox.jsx'

class PeopleListPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.updatePeopleList();
  }

  render() {
    const peopleList = this.props.people.data
      ? this.props.people.data.results
      : [];

    return (
      <div className="people-list-page">
        <SearchBox submit={this.props.fetchPeople}/>
        <PeopleList people={peopleList}/>
      </div>
    );
  }

  // Helpers
  updatePeopleList() {
    this.props.fetchPeople();
  }
}

PeopleListPage.propTypes = {
  people: PropTypes.object.isRequired,
}

function mapStateToProps(state, ownProps) {
  return {
    people: state.people,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators({
    fetchPeople: fetchPeople
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleListPage);
