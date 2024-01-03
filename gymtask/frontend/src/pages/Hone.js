import { useEffect} from "react";
import WorkoutDetals from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkouts";
import { useAuthContext } from "../hooks/useAuthContext";
const Home = () => {
  const backgroundImageUrl = "url('https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-black-and-white-gym-room-with-a-row-of-equipment-image_2911173.jpg')"; // Replace with your image URL






  const {workouts,dispatch} = useWorkoutsContext()
  const{user}=useAuthContext()

  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch("http://localhost:4000/api/workouts",{
        method: 'GET',
        // headers: {
        //   'Authorization': `Bearer ${user.token}`
        // }
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({type:'SET_WORKOUTS',payload :json})
      }
    };
      if(user){
        fetchWorkout();
      }
  
  }, [dispatch,user]);

  return (
    <div
    className="h-screen mx-auto flex space-x-4 p-4 "
    style={{
      backgroundImage: backgroundImageUrl,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    }}
  >

      <div className="flex-1">
        {workouts &&
          workouts.map((workout) => (
    
            <WorkoutDetals key={workout._id} workout={workout}/>
          ))}
      </div>
      <div className="flex-1">
        <WorkoutForm />
      </div>
    </div>
  );
};

export default Home;
