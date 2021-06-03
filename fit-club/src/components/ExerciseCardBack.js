import React, { Component } from 'react'

export default class ExerciseCardBack extends Component {

    render() {
        return (
                <div className='card-back' onClick={this.props.handleWorkout}>
                        <div className='card-back-content'>
                            <button className='flip-button' onClick={this.props.readMore}>X</button>
                            <h2 className='exercise-name'>{this.props.exercise.name}</h2>
                            <br/>
                            <img src={this.props.exercise.image} alt='exercise-example' />
                            <br/>
                            <br/>
                            <p className='workout-details'>{this.props.exercise.workoutDescription}</p>
                        </div>
                </div>
        )
    }
}
