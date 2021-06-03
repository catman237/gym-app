import React, { Component } from 'react'

export default class ExerciseCardFront extends Component {

    render() {
        return (
                <div className='card-front' onClick={this.props.handleWorkout}>
                        <div className='card-content'>
                            <h2 className='weight'>💪🏼</h2>
                            <h2 className='exercise-name'>{this.props.exercise.name}</h2>
                            <br/>
                            <h4 className='muscle'>Muscles Targeted: <br/>{this.props.exercise.muscleGroup}</h4>
                            <br />
                            <h4 className='equipment'>Equipment Needed: <br/>{this.props.exercise.equpipmentNeeded}</h4>
                            <button className='flip-button' onClick={this.props.readMore}>Read More</button>
                        </div>
                </div>
        )
    }
}
