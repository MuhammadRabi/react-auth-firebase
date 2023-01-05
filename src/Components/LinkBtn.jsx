import { Link } from "react-router-dom"

const LinkBtn = ({ msg, title, linksTo }) => {
  return (
    <p className="text-center">
      {msg}{" "}
      <Link to={linksTo} className="font-bold">
        {title}
      </Link>
    </p>
  )
}

export default LinkBtn
