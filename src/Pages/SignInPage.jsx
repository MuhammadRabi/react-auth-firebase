import { useState } from "react"
import SignInBtn from "../Components/SignInBtn"
import { UserAuth } from "../Context/AuthContext"
import { useNavigate } from "react-router-dom"

const SignInPage = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const { logIn } = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await logIn(email, password)
      navigate("/user")
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className="text-emerald-700 mt-12">
      <p className="text-6xl capitalize text-center font-bold">
        firebase authentication
      </p>

      <form
        className="bg-gray-100 mt-14 rounded-sm w-[450px] mx-auto flex flex-col space-y-3 p-5 shadow-xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-4xl font-medium capitalize mt-1 mb-4 text-center">
          login
        </h2>
        <label htmlFor="email">email address</label>
        <input
          className="px-4 py-1 rounded-sm focus:ring-1 focus:outline-none focus:ring-emerald-700 duration-300"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          className="px-4 py-1 rounded-sm focus:ring-1 focus:outline-none focus:ring-emerald-700 duration-300"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />
        <div className="flex justify-around">
          <SignInBtn />
        </div>
      </form>

      <div className="flex justify-center space-x-4 mt-5"></div>
    </div>
  )
}

export default SignInPage
