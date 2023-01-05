import SignInBtn from "../Components/SignInBtn"
import { UserAuth } from "../Context/AuthContext"
import { useNavigate } from "react-router-dom"
import InputRow from "../Components/InputRow"
import FormContainer from "../Components/FormContainer"
import PageHeading from "../Components/PageHeading"
import LinkBtn from "../Components/LinkBtn"
import { useState } from "react"

const SignInPage = () => {
  const { logIn, inputs } = UserAuth()
  const [alert, setAlert] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await logIn(inputs.email, inputs.password)
      navigate("/user")
    } catch (error) {
      setAlert(true)
    }
  }
  return (
    <>
      <PageHeading welcomMsg="firebase Authentication!" />
      <FormContainer handleSubmit={handleSubmit} title="log in">
        {alert && <p>please enter correct values</p>}

        <InputRow inputType="email" />
        <InputRow inputType="password" />
        <SignInBtn />
        <LinkBtn
          title="sign up!"
          linksTo="/signUp"
          msg="don't have an account yet?"
        />
      </FormContainer>
    </>
  )
}

export default SignInPage
