import { LOGO } from "../utils/Constants"

const Header = () => {
  return (
    <div className="absolute px-9 py-2 bg-gradient-to-br from-black bg-cover z-10" >
      <img className="w-60 brightness-125" src={LOGO} />
    </div>
  )
}

export default Header