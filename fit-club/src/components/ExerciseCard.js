import React from 'react'

class ExerciseCard extends React.Component {

    state = {
        click: false
    }

    handleWorkout = () => {
        if (this.props.addWorkout) {
            this.props.addWorkout(this.props.exercise)
        }
    }

    readMore = (e) => {
        e.stopPropagation()
        this.setState({
            click: !this.state.click
        })
    }
    render() {
        return (
            <div>
                {!this.state.click

                    ?

                    <div className='card-front' onClick={this.handleWorkout}>
                        <div className='card-content'>
                            <h2 className='weight'>💪🏼</h2>
                            <h2 className='exercise-name'>{this.props.exercise.name}</h2>
                            <br/>
                            <h4 className='muscle'>Muscles Targeted: <br/>{this.props.exercise.muscleGroup}</h4>
                            <br />
                            <h4 className='equipment'>Equipment Needed: <br/>{this.props.exercise.equpipmentNeeded}</h4>
                            <button className='flip-button' onClick={this.readMore}>Read More</button>
                        </div>
                    </div>

                    :

                    <div className='card-back' onClick={this.handleWorkout}>
                        <div className='card-back-content'>
                            <button className='flip-button' onClick={this.readMore}>X</button>
                            <h2 className='exercise-name'>{this.props.exercise.name}</h2>
                            <br/>
                            <img src={this.props.exercise.image} alt='exercise-example' />
                            <br/>
                            <br/>
                            <p className='workout-details'>{this.props.exercise.workoutDescription}</p>
                        </div>
                    </div>
                }
            </div>
        )

    }
}

export default ExerciseCard
