import React, { Component } from 'react'
import ExerciseCard from '../components/ExerciseCard'

export default class YourExercisesContainer extends Component {

    addNewWorkout = () => {
        return this.props.yourWorkouts.map(exercise => {
            return <ExerciseCard key={exercise.id} exercise={exercise} removeWorkout={this.props.removeWorkout} />
        })
    }

    render() {
        return (
            <div className='your-exercises'>
            <h2 className='your-workouts-header'>Your Workouts</h2>
                {this.addNewWorkout()}
            </div>
        )
    }
}
