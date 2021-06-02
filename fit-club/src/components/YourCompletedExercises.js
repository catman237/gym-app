import React from 'react'

function YourCompletedExercises(props) {

    const handleWorkout = () => {
        props.removeWorkout(props.exercise)
    }

    return (
        <div className='green-card' onClick={handleWorkout}>
            <div className='green-card-inner'>
                <div className='green-card-front'>
                    <div className='green-card-content'>
                        <h2 className='green-weight'>💪🏼</h2>
                        <h2 className='green-exercise-name'>{props.exercise.name}</h2>
                        <h4 className='green-muscle'>{props.exercise.muscleGroup}</h4>
                        <button className='green-flip-button' onClick={handleWorkout}>Remove Workout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourCompletedExercises
