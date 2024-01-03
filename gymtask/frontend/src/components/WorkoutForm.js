import{ useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkouts";

import { useAuthContext } from "../hooks/useAuthContext";


const WorkoutForm = ()=>{
    const {dispatch}= useWorkoutsContext()
    const {user} = useAuthContext()

    const [title,setTitle]=useState('')
    const [load,setLoad]=useState('')
    const [reps,setReps]=useState('')

    const [error,setError]=useState('')

const handleSubmit = async (e) =>{
e.preventDefault()

if(!user){
    setError("login first")
    return
}

const workout ={title, reps ,load}

const response = await fetch("http://localhost:4000/api/workouts",{
    method : 'POST',
    body : JSON.stringify(workout),
    headers :{
        'content-Type' :'application/json',
        'Authorization': `Bearer ${user.token}`
    }
})

const json = await response.json()

if(!response.ok){
    setError(json.error)
}
if(response.ok){
    setTitle('')
    setLoad('')
    setReps('')
    setError(null)
    console.log("new workout added",json)
    dispatch({type:'CREATE_WORKOUT', payload :json})
}
}


    return(
        <form  onSubmit={handleSubmit} className=" bg-white bg-opacity-80 p-4 shadow-md rounded-md">
        <h3 className="text-xl font-bold mb-4">Add New Workout</h3>
  
        <label htmlFor="exerciseTitle">Exercise Title</label>
        <input
          type="text"
          id="exerciseTitle"
          className="w-full p-2 mb-2 border"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
  
        <label htmlFor="load">Load (kg)</label>
        <input
        
          type="number"
          id="load"
          className="w-full p-2 mb-2 border"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
        />
  
        <label htmlFor="reps">Reps</label>
        <input
          type="number"
          id="reps"
          className="w-full p-2 mb-2 border"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
        />
  
        <button className="bg-green-500 bg-opacity-80 text-white p-2 rounded-md">
          <strong> Add Workout</strong>
        </button>
        {error && <div className="text-red-500">{error}</div>}
      </form>
    
    )
}

export default WorkoutForm;