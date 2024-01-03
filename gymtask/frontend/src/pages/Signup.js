import{ useState } from "react"
import { useSignup } from "../hooks/useSignup"

const Signup =()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const { signup, isloading, error } = useSignup();

    const handleSubmit = async (e) =>{
        e.preventDefault()
       
        await signup(email,password)
    }

    return(
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md mt-10">
        <h3 className="text-2xl font-semibold mb-4">Sign Up</h3>
      
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
      
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
      
        <button 
          disabled={isloading}
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Sign Up
        </button>
        {error && <div>{error}</div>}
      </form>
      
    )
}

export default Signup