import { useWorkoutsContext } from "../hooks/useWorkouts";


import { useAuthContext } from "../hooks/useAuthContext";

const WorkoutDetails = ({workout}) =>{

    const {dispatch} =  useWorkoutsContext()
    const {user} = useAuthContext()

     const handleClick = async()=>{
        if(!user){
            return
        }
      const response = await fetch("http://localhost:4000/api/workouts/"+ workout._id, {
        method : 'DELETE',
        headers :{
            'Authorization': `Bearer ${user.token}`
        }
        
      })
      const json = await response.json()
      if(response.ok){
        dispatch({type:'DELETE_WORKOUT',payload :json})
      }
     }


    return(
        <div className="flex-1 bg-white bg-opacity-80 p-4 shadow-md rounded-md mb-4 relative">
        <h4 className="text-xl font-bold mb-2">{workout.title}</h4>
        <p>
          <strong>Load (kg):</strong> {workout.load}
        </p>
        <p>
          <strong>Reps:</strong> {workout.reps}
        </p>
        <p>{workout.createdAt}</p>
        <span className="absolute top-1/2 transform -translate-y-1/2 right-4 text-red-500 cursor-pointer" onClick={handleClick}>
           <strong>Delete</strong> 
        </span>
      </div>
      
    )
}
export default WorkoutDetails