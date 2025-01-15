
const Footer = () => {
  return (
    <footer className="w-screen h-96 bg-black">
        <div>
        <p className="text-white hover:underline cursor-pointer">Questions? Call 000-800-919-1743</p>

        </div>
        <div className="m-40 ">
            
            <ul className="flex text-white underline min-w-36 flex-nowrap items-center">
                <li className="m-4 cursor-pointer">FAQ</li>
                <li className="m-4 cursor-pointer">Help Center</li>
                <li className="m-4 cursor-pointer">Terms of Use</li>
                <li className="m-4 cursor-pointer">Privacy</li>
                <li className="m-4 cursor-pointer">Cookie Preferences</li>
                <li className="m-4 cursor-pointer">Corporate Information</li>
            </ul>
        </div>
            
    </footer>


    
  )
}

export default Footer