import React, {Component, PropTypes} from 'react'

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.updateText = this.updateText.bind(this)
    this.search = this.search.bind(this)
  }

  render() {
    return (
      <form onSubmit={this.search}>
        <input type="text" value={this.state.text} onChange={this.updateText} />
        <input type="submit" value="Search" />
      </form>

    )
  }

  updateText(event) {
    this.setState({
      text: event.target.value
    })
  }

  search(event) {
    event.preventDefault()
    this.props.submit(this.state.text)
  }
}

SearchBox.propTypes = {
  submit: PropTypes.func.isRequired
}

export default SearchBox;
