import React from 'react'
import ExerciseCardFront from './ExerciseCardFront'
import ExerciseCardBack from './ExerciseCardBack'
import ReactCardFlip from 'react-card-flip'

class ExerciseCard extends React.Component {

    state = {
        isFlipped: false
    }

    handleWorkout = () => {
        if (this.props.addWorkout) {
            this.props.addWorkout(this.props.exercise)
        }
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

                    <ExerciseCardFront addWorkout={this.props.addWorkout} favorite={this.props.favorite} exercise={this.props.exercise} handleWorkout={this.handleWorkout} readMore={this.readMore} />

                    <ExerciseCardBack addWorkout={this.props.addWorkout} favorite={this.props.favorite} exercise={this.props.exercise} handleWorkout={this.handleWorkout} readMore={this.readMore} />

                    </ReactCardFlip>
        )

    }
}

export default ExerciseCard
