import { useNavigate } from "react-router-dom"
import FormContainer from "../Components/FormContainer"
import InputRow from "../Components/InputRow"
import LinkBtn from "../Components/LinkBtn"
import PageHeading from "../Components/PageHeading"
import RegisterBtn from "../Components/RegisterBtn"
import { UserAuth } from "../Context/AuthContext"

const RegisterPage = () => {
  const { register } = UserAuth()
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
    <>
      <PageHeading welcomMsg="sign up a new account!" />
      <FormContainer handleSubmit={handleSubmit} title="register">
        <InputRow inputType="email" />
        <InputRow inputType="password" />
        <RegisterBtn />
        <LinkBtn
          title="sign in!"
          linksTo="/"
          msg="do you already have an account?"
        />
      </FormContainer>
    </>
  )
}

export default RegisterPage
