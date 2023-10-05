import { Link } from "react-router-dom";
import user from './../../assets/user.png'


const NavbarSecondary = () => {
    return (
        <div className="flex">
            <div className="w-36"></div>
            <ul className="flex  flex-1 justify-center  gap-5">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link>About</Link></li>
                <li><Link>Career</Link></li>
            </ul>
            <div className="flex gap-2" >
                <img className="w-10" src={user} alt="" />
                <button className=" bg-[#403F3F] px-5  text-base text-white font-normal " >Login</button>
            </div>
        </div>
    );
};

export default NavbarSecondary;