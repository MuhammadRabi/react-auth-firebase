import { UserAuth } from "../Context/AuthContext"

const RegisterBtn = () => {
  const { register } = UserAuth()
  return (
    <button onClick={() => console.log(register)} className="generic-btn">
      Register
    </button>
  )
}
export default RegisterBtn
