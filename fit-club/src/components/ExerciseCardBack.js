import React, { Component } from 'react'

export default class ExerciseCardBack extends Component {

    render() {
        return (
            <div className='card-back'>
                <div className='card-back-content'>
                    <button className='flip-button' onClick={this.props.readMore}>X</button>
                    <h2 className='exercise-name'>{this.props.exercise.name}</h2>
                    <br />
                    <img src={this.props.exercise.image} alt='exercise-example' />
                    <br />
                    <br />
                    <p className='workout-details'>{this.props.exercise.workoutDescription}</p>
                    <br />
                    <form action="submit">
                        <select className="genre-selector" >
                            <option value="Sets">Sets</option>
                            <option value="1">1</option>
                            <option value="3">3</option>
                            <option value="5">5</option>
                        </select>
                        <br />
                        <select className="reps" >
                            <option value="Reps">Reps</option>
                            <option value="5">5</option>
                            <option value="8">8</option>
                            <option value="10">10</option>
                        </select>
                        <br />
                        <select className="weights">
                            <option value="0">Weight</option>
                            <option value="0">Body</option>
                            <option value="10">10lbs</option>
                            <option value="20">20lbs</option>
                            <option value="30">30lbs</option>
                            <option value="40">40lbs</option>
                            <option value="50">50lbs</option>
                            <option value="60">60lbs</option>
                            <option value="70">70lbs</option>
                            <option value="80">80lbs</option>
                        </select>
                        <br />
                    </form>
                    <button
                        className="submitButton"
                        type="submit"
                        onClick={this.props.handleWorkout}
                    >Submit</button>
                </div>
            </div>
        )
    }
}
