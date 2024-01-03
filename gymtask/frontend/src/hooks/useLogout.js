import {useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from "./useWorkouts"; 
export const useLogout = () =>{
     const {dispatch} = useAuthContext()
     const {dispatch : workoutsDispatch} = useWorkoutsContext()
      

     const logout = ()=>{
        localStorage.removeItem('user')
        dispatch({type:'LOGOUT'})
        workoutsDispatch({type : 'SET_WORKOUTS',payload :null})
     }
     return {logout}
}