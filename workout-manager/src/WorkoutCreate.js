function WorkoutCreate({dispatch}) {

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            addToServer(event.target.value)
            event.target.value = ""
        }
    }

    function addToServer(workoutName) {
        fetch("http://localhost:8080/workout-manager", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: workoutName})
            }).then(r => dispatch({type: "delete"}));
    }

    return (
        <div>
            <input type="text" placeholder="Name, Reps, Weight" onKeyDown={handleKeyPress}/>
        </div>
    )

}

export default WorkoutCreate;