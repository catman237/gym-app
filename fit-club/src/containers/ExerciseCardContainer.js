import React, { Component } from 'react'
import ExerciseCard from '../components/ExerciseCard'

export default class ExerciseCardContainer extends Component {

    handleExerciseCards = () => {
        return this.props.exercises.map(exercise => {
            return <ExerciseCard key={exercise.id} exercise={exercise} addWorkout={this.props.addWorkout} />
        })
    }

    render() {
        return (
            <div className='card-body'>
                <div className='card-container'>
                    {this.handleExerciseCards()}
                </div>
            </div>
        )
    }
}
