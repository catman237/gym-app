import React from 'react'

function ExerciseCard(props) {

    const handleWorkout = () => {
        if (props.addWorkout) {
            props.addWorkout(props.exercise)
        } else {
            props.removeWorkout(props.exercise)
        }
    }

    return (
        <div className='card' onClick={handleWorkout}>
            <div className='card-inner'>
                <div className='card-front'>
                    <div className='card-content'>
                        <h2 className='weight'>💪🏼</h2>
                        <h2 className='exercise-name'>{props.exercise.name}</h2>
                        <h4 className='muscle'>{props.exercise.muscleGroup}</h4>
                        <h4 className='equipment'>{props.exercise.equpipmentNeeded}</h4>
                        <button className='flip-button'>Read More</button>
                    </div>
                </div>
                {/* <div className='card'>
                    <div className='card-back'>
                        <div className='card-back-content'>
                            <h2 className='exercise-name'>{props.exercise.name}</h2>
                            <p className='workout-details'>{props.exercise.workoutDescription}</p>
                            <h4 className='muscle'>{props.exercise.muscleGroup}</h4>
                            <h4 className='equipment'>{props.exercise.equpipmentNeeded}</h4>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default ExerciseCard
