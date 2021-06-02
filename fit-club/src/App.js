import React, { Component } from 'react'
import './App.css';
import ExerciseCardContainer from './containers/ExerciseCardContainer'
import YourExercisesContainer from './containers/YourExercisesContainer'

export default class App extends Component {

  state = {
    "exercises": [],
    "yourWorkouts": [],
    "favoriteWorkout": []
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

  favoriteWorkout = (clickedWorkout) => {
    const newFavorite = [...this.state.favoriteWorkout, clickedWorkout]
    this.setState({ favoriteWorkout: newFavorite })
  }

  removeWorkout = (clickedWorkout) => {
    const removeWorkout = this.state.yourWorkouts.filter(workout => {
      return workout.id !== clickedWorkout.id
    })
    this.setState({
      yourWorkouts: removeWorkout
    })
  }

  addWorkout = (clickedWorkout) => {
    if (!this.state.yourWorkouts.includes(clickedWorkout)) {
      this.setState({
        yourWorkouts: [...this.state.yourWorkouts, clickedWorkout]
      })
    }
  }

  render() {
    return (
      <div>
        <YourExercisesContainer 
        yourWorkouts={this.state.yourWorkouts} 
        removeWorkout={this.removeWorkout} 
        />

        <ExerciseCardContainer 
        exercises={this.state.exercises} 
        addWorkout={this.addWorkout} 
        favorite={this.favoriteWorkout}
        />
      </div>
    )
  }
}
