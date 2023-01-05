import { UserAuth } from "../Context/AuthContext"
import SignOutBtn from "../Components/SignOutBtn"

const UserWelcome = () => {
  const { user } = UserAuth()
  return (
    <>
      <section className="my-5 flex flex-col mx-auto w-96 space-y-2">
        <h2>welcome {user && user.email}!</h2>
        <span>account created at: {user && user.metadata.creationTime}</span>
        <span>last sign in: {user && user.metadata.lastSignInTime}</span>
      </section>
      <SignOutBtn />
    </>
  )
}
export default UserWelcome
