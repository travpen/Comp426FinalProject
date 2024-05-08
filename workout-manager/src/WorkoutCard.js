function WorkoutCard({name, dispatch}) {

    function handleClick() {
        fetch("http://localhost:8080/workout-manager", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: name})
        }).then(r => dispatch({type: "delete"}));
    }

    return (
        <div>
            <p className="card">{name}</p>
            <button className="completed-button" onClick={handleClick}> Completed </button>
        </div>
    )
}

export default WorkoutCard;