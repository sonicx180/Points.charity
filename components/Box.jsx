
export const Input = () => {return (<div> </div>)}

const Box = ({children}) => {
  return (
    <div className = "flex bg-[#D9D9D9] text-black w-1/5 items-center">
      {children}
    </div>
  )
}

export default Box