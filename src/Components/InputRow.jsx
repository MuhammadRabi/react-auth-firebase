import { UserAuth } from "../Context/AuthContext"

const InputRow = ({ inputType }) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    setInputs((prev) => ({ ...prev, [name]: value }))
  }

  const { inputs, setInputs } = UserAuth()

  return (
    <>
      <label htmlFor={inputType} className="text-emerald-700 ">
        {inputType}
      </label>
      <input
        className="px-4 py-2 rounded-sm focus:ring-1 focus:outline-none focus:ring-emerald-700 duration-300"
        value={inputs.inputType}
        onChange={handleChange}
        name={inputType}
        type={inputType}
        placeholder={`please enter your ${inputType} here`}
      />
    </>
  )
}
export default InputRow
