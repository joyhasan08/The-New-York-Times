import { Link } from "react-router-dom";
import user from './../../assets/user.png'


const NavbarSecondary = () => {
    return (
        <div className="flex flex-col md:flex-row ">
            <div className="w-36"></div>
            <ul className=" text-lg font-medium  flex  flex-1 justify-center  gap-5">
                <li className="hover:bg-slate-300 py-1  rounded-sm  btn btn-ghost" ><Link to={'/'}>Home</Link></li>
                <li className="hover:bg-slate-300 py-1  rounded-sm btn btn-ghost " ><Link>About</Link></li>
                <li className="hover:bg-slate-300 py-1  rounded-sm  btn btn-ghost" ><Link>Career</Link></li>
            </ul>
            <div className="flex gap-2 py-2 px-2   " >
                <img className="w-10" src={user} alt="" />
                <button className=" bg-[#403F3F] px-5  text-base text-white font-normal "  ><Link to={"/login"} > Login</Link></button>
            </div>
        </div>
    );
};

export default NavbarSecondary;