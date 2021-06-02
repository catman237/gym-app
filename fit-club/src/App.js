import React, { Component } from 'react'
import './App.css';
import ExerciseCardContainer from './containers/ExerciseCardContainer'
import YourExercisesContainer from './containers/YourExercisesContainer'

export default class App extends Component {

  state = {
    "exercises": [],
    "yourWorkouts": []
  }

  componentDidMount() {
    fetch('http://localhost:3000/exercises')
      .then(res => res.json())
      .then(exercise => {
        this.setState({
          "exercises": exercise
        })
      })
  }

  removeWorkout = (clickedWorkout) => {
    fetch('http://localhost:3000/exercises/' + clickedWorkout.id, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        exerciseIsDone: false
      })
    })
      .then(res => res.json())
      .then(updatedWorkout => {
    const removeWorkout = this.state.yourWorkouts.filter(workout => {
      return workout.id !== updatedWorkout.id
    })
    this.setState({
      yourWorkouts: removeWorkout
    })
  })
  }

  addWorkout = (clickedWorkout) => {
    if (!this.state.yourWorkouts.includes(clickedWorkout)) {
      this.setState({
        yourWorkouts: [...this.state.yourWorkouts, clickedWorkout]
      })
    }
  }

  greenCard = (clickedWorkout) => {

    fetch('http://localhost:3000/exercises/' + clickedWorkout.id, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        exerciseIsDone: true
      })
    })
      .then(res => res.json())
      .then(updatedWorkout => {
        const yourWorkouts = this.state.yourWorkouts.map(workout => {
          if (workout.id === updatedWorkout.id) {
            return updatedWorkout
          } else {
            return workout
          }
        })
        this.setState({
          yourWorkouts: yourWorkouts
        })
        
      })

  }

  render() {
    return (
      <div>
        <YourExercisesContainer exerciseIsDone={this.state.exerciseIsDone} greenCard={this.greenCard} yourWorkouts={this.state.yourWorkouts} removeWorkout={this.removeWorkout} />
        <ExerciseCardContainer exercises={this.state.exercises} addWorkout={this.addWorkout} />
      </div>
    )
  }
}
