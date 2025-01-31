import React from 'react'

function YourCompletedExercises(props) {

    const handleWorkout = () => {
        props.removeWorkout(props.exercise)
    }

    return (
        <div className='green-card'>
            <div className='green-card-inner'>
                <div className='green-card-front'>
                    <div className='green-card-content'>
                        <h2 className='green-weight'>💪🏼</h2>
                        <h2 className='green-exercise-name'>{props.exercise.name} DONE!</h2>
                        <h3 className='green-muscle'>Nice Work! 🥳</h3>
                        <button className='green-flip-button' onClick={handleWorkout}>Remove Workout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourCompletedExercises
