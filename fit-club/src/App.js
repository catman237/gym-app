import React, { Component } from 'react'
import './App.css';
import ExerciseCardContainer from './containers/ExerciseCardContainer'
import YourExercisesContainer from './containers/YourExercisesContainer'

export default class App extends Component {

  state = {
    "exercises": [],
    "yourWorkouts": [],
    "favoriteWorkout": [],
    "reps": []
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
    console.log('reps Sets Weight', clickedWorkout)
    console.log('reps Sets Weightsssss', this.state.yourWorkouts)
    if (!this.state.yourWorkouts.includes(clickedWorkout)) {
    const updatedWorkout = { ...clickedWorkout, ...repsSetsWeight }
    fetch('http://localhost:3000/exercises/' + clickedWorkout.id, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedWorkout)
    })
      this.setState({
        yourWorkouts: [...this.state.yourWorkouts, updatedWorkout]
      })

      console.log('UPGRAYDD', updatedWorkout)

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
