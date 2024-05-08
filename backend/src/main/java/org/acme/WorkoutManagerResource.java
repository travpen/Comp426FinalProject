package org.acme;

import java.util.ArrayList;
import java.util.List;

import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;

@Path("/workout-manager")
public class WorkoutManagerResource {
    
    private List<String> workouts = new ArrayList<>();

    @GET
    public List<String> getWorkouts() {
        return workouts;
    }

    @POST
    public Response createWorkout(WorkoutWrapper workoutWrapper) {
        workouts.add(workoutWrapper.getName());
        return Response.ok().build();
    }

    @DELETE
    public Response deleteWorkout(WorkoutWrapper workoutWrapper) {
        workouts.removeIf(t -> t.equalsIgnoreCase(workoutWrapper.getName()));
        return Response.ok().build();
    }
}
