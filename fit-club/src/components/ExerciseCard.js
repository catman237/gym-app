import React from 'react'
import ExerciseCardFront from './ExerciseCardFront'
import ExerciseCardBack from './ExerciseCardBack'
import ReactCardFlip from 'react-card-flip'

class ExerciseCard extends React.Component {

    state = {
        isFlipped: false
    }

    handleWorkout = (repsSetsWeight) => {
        if (this.props.submitWorkoutInfo) {
            this.props.submitWorkoutInfo(this.props.exercise, repsSetsWeight)
        }
    }

    handleWorkoutInfo = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.props.submitWorkoutInfo(this.props.exercise)
    }

    readMore = (e) => {
        e.stopPropagation()
        this.setState({
            isFlipped: !this.state.isFlipped
        })
    }

    render() {
        return (

            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">

                <ExerciseCardFront
                    favorite={this.props.favorite}
                    exercise={this.props.exercise}
                    readMore={this.readMore}
                />

                <ExerciseCardBack
                    favorite={this.props.favorite}
                    exercise={this.props.exercise}
                    handleWorkout={this.handleWorkout}
                    readMore={this.readMore}
                    submitWorkoutInfo={this.handleWorkoutInfo}
                />

            </ReactCardFlip>
        )

    }
}

export default ExerciseCard
