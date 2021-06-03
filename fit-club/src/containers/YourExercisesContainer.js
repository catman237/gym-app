import React, { Component } from 'react'
import YourExerciseCards from '../components/YourExerciseCards'
import YourCompletedExercises from '../components/YourCompletedExercises'

export default class YourExercisesContainer extends Component {

    renderCards = () => {
        return this.props.yourWorkouts.map(exercise => {
            if (exercise.exerciseIsDone) {
                return <YourCompletedExercises
                    key={exercise.id} exercise={exercise}
                    removeWorkout={this.props.removeWorkout}
                    greenCard={this.props.greenCard}
                />

            } else {
                return <YourExerciseCards
                    key={exercise.id}
                    exercise={exercise}
                    removeWorkout={this.props.removeWorkout}
                    greenCard={this.props.greenCard}
                />
            }
        })
    }

    render() {
        return (
            <div className='your-exercises'>
                <h2 className='your-workouts-header'>Your Workouts</h2>
                {this.renderCards()}
            </div>
        )
    }
}
