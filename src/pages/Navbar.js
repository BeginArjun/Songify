import "../../flow/config"
import * as fcl from "@onflow/fcl";
const Navbar=()=>{
    return(
        <div className="logo-container flex flex-row justify-between items-center w-screen h-[65px]">
            <div className="Logo flex flex-row justify-center items-center">
                <div className=" circle w-[50px] h-[50px] rounded-full"></div>
                <p className="text-3xl font-Poppins Logo-text">Songi.fy</p>
            </div>
            <div className="button-container">
                <button className="button" onClick={fcl.logIn}>LogIn</button>
                <button className="button" onClick={fcl.signUp}>SignUp</button>
            </div>
        </div>
    )
}
export default Navbar