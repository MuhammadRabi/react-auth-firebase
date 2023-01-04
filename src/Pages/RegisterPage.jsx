import { useState } from "react"
import { useNavigate } from "react-router-dom"
import RegisterBtn from "../Components/RegisterBtn"
import { UserAuth } from "../Context/AuthContext"

const RegisterPage = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  /*   const [name, setName] = useState("")
   */ const { register } = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await register(email, password)
      navigate("/user")
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className="text-emerald-700 mt-12">
      <p className="text-6xl capitalize text-center font-bold">
        sign up a new account!
      </p>

      <form
        className="bg-gray-100 mt-14 rounded-sm w-[450px] mx-auto flex flex-col space-y-3 p-5 shadow-xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-4xl font-medium capitalize mt-1 mb-4 text-center">
          register
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
          <RegisterBtn />
        </div>
      </form>

      <div className="flex justify-center space-x-4 mt-5"></div>
    </div>
  )
}

export default RegisterPage
