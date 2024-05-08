import {useEffect, useReducer} from "react";
import WorkoutCreate from "./WorkoutCreate";
import WorkoutCard from "./WorkoutCard";

function WorkoutManager() {
    const [workoutNames, dispatch] = useReducer(reducer, [])

    useEffect(() => {
      getFromServer();
  }, []);

    function reducer(state, action) {
      if (action.type === "add") {
        getFromServer();
        return state;
      } else if (action.type === "delete") {
        getFromServer();
        return state;
      } else if (action.type === "data") {
        return action.result;
      }
    }

    function getFromServer() {
      fetch("http://localhost:8080/workout-manager", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
            }).then(r => r.json()).then(d => dispatch({type: "data", result: d}));
        
    }

    return (
        <div>
            <WorkoutCreate dispatch={dispatch}/>
            {workoutNames.map(tn => <WorkoutCard name={tn} dispatch={dispatch}/>)}
        </div>
    )
}

export default WorkoutManager;