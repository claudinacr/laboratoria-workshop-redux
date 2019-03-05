import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        Hello World
      </div>
    )
  }
}

function mapStateToProps(calendar) {
  return {
    calendar: Object.keys(calendar)
      .map((day) => ({
        day,
        meals: {...calendar[day]}
      }))
  }
}

export default connect(
  mapStateToProps,
)(App)