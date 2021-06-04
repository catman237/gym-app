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

  addWorkout = (clickedWorkout, repsSetsWeight) => {
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



  submitWorkoutInfo = (clickedWorkout, repsSetsWeight) => {
    console.log('reps Sets Weight', repsSetsWeight)
    const updatedWorkout = { ...clickedWorkout, ...repsSetsWeight }
    fetch('http://localhost:3000/exercises/' + clickedWorkout.id, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedWorkout)
    })
    if (!this.state.yourWorkouts.includes(updatedWorkout)) {
      this.setState({
        yourWorkouts: [updatedWorkout, ...this.state.yourWorkouts]
      }) 
    } else {
      this.setState({
        yourWorkouts: [updatedWorkout, ...this.state.yourWorkouts]
      })
    }
  }

  render() {
    return (
      <div>
        <YourExercisesContainer
          exerciseIsDone={this.state.exerciseIsDone}
          greenCard={this.greenCard}
          yourWorkouts={this.state.yourWorkouts}
          removeWorkout={this.removeWorkout}
          submitWorkoutInfo={this.submitWorkoutInfo}
          exercise={this.state.exercise}
        />
        <ExerciseCardContainer
          exercises={this.state.exercises}
          addWorkout={this.addWorkout}
          submitWorkoutInfo={this.submitWorkoutInfo}
        />
      </div>
    )
  }
}
