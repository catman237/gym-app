import React, { Component } from 'react'

export default class ExerciseCardBack extends Component {

    state = {
        reps: 0,
        sets: 0,
        weight: 0
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className='card-back'>
                <div className='card-back-content'>
                    <button className='flip-button' onClick={this.props.readMore}>↩</button>
                    <h2 className='exercise-name'>{this.props.exercise.name}</h2>
                    <br />
                    <img src={this.props.exercise.image} alt='exercise-example' />
                    <br />
                    <br />
                    <p className='workout-details'>{this.props.exercise.workoutDescription}</p>
                    <br />
                    <form action="submit">
                        <select value={this.state.sets} name="sets" className="sets" onChange={this.handleChange}>
                            <option value="0">Sets</option>
                            <option value="1">1</option>
                            <option value="3">3</option>
                            <option value="5">5</option>
                        </select>
                        <br />
                        <select value={this.state.reps} name="reps" className="reps" onChange={this.handleChange}>
                            <option value="0">Reps</option>
                            <option value="5">5</option>
                            <option value="8">8</option>
                            <option value="10">10</option>
                        </select>
                        <br />
                        <select value={this.state.weight} name="weight" className="weights" onChange={this.handleChange}>
                            <option value="0">Weight</option>
                            <option value="Body">Body</option>
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
                        onClick={() => this.props.handleWorkout(this.state)}
                    >Add To Workouts</button>
                </div>
            </div>
        )
    }
}
