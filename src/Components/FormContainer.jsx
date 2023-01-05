const FormContainer = ({ children, handleSubmit, title }) => {
  return (
    <form
      className="bg-gray-100 mt-14 rounded-sm w-[450px] mx-auto flex flex-col space-y-2 p-5 shadow-xl"
      onSubmit={handleSubmit}
    >
      <h2 className="text-4xl font-medium capitalize mt-1 mb-4 text-center">
        {title}
      </h2>
      {children}
    </form>
  )
}
export default FormContainer
