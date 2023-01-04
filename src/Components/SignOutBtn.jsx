import { useNavigate } from "react-router-dom"
import { UserAuth } from "../Context/AuthContext"

const SignOutBtn = () => {
  const { logOut } = UserAuth()
  const navigate = useNavigate()
  const handleSignOut = async (e) => {
    try {
      await logOut()
      navigate("/")
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <button
      className="generic-btn absolute top-4 right-4"
      onClick={handleSignOut}
    >
      sign out
    </button>
  )
}

export default SignOutBtn
