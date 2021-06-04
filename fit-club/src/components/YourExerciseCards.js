import React from 'react'

function YourExerciseCards(props) {

    console.log('HERE', props)

    const handleWorkout = () => {
        props.removeWorkout(props.exercise)
    }

    const handleGreenCard = (e) => {
        e.stopPropagation()
        props.greenCard(props.exercise)
    }

    return (
        <div className='card' onClick={handleWorkout}>
            <div className='card-inner'>
                <div className='card-front'>
                    <div className='card-content'>
                        <h2 className='weight'>🥵</h2>
                        <h2 className='exercise-name'>{props.exercise.name}</h2>
                        <h3 className='reps'>sets {props.exercise.sets} 
                         <br />
                         Reps {props.exercise.reps}
                        <br />
                        weight {props.exercise.weight}
                        </h3>
                        <button className='flip-button' onClick={handleGreenCard}>DONE 🥵</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default YourExerciseCards
