import { RouterProvider, createBrowserRouter } from "react-router-dom"
import UserWelcome from "./Pages/UserWelcome"
import RegisterPage from "./Pages/RegisterPage"
import SignInPage from "./Pages/SignInPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
  },
  {
    path: "/signup",
    element: <RegisterPage />,
  },
  {
    path: "/user",
    element: <UserWelcome />,
  },
])
const App = () => {
  return <RouterProvider router={router} />
}
export default App
