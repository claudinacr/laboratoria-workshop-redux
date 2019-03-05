import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from '../actions'

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

// State data as props
function mapStateToProps(calendar) {
  return {
    calendar: Object.keys(calendar)
      .map((day) => ({
        day,
        meals: {...calendar[day]}
      }))
  }
}

// Dispatch actions as props
function mapDispatchToProps (dispatch) {
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)



