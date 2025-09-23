import { Link } from "react-router-dom";
import NavbarSecondary from "../../layouts/Navbar/NavbarSecondary";


const LoginPage = () => {
    return (
        <div>
            <div><NavbarSecondary></NavbarSecondary></div>
            <div className=" card card-bordered mx-4 my-4 p-5 md:w-6/12 md:mx-auto">
                <h2 className=" text-gray-900  text-4xl font-semibold py-6 text-center">Login your account</h2>
                <form className="flex flex-col space-y-4 text-xl font-semibold" >
                    <p>Email address</p>
                    <input className="input bg-gray-200 text-black" type="email" placeholder="enter your email here" />
                    <p>Password</p>
                    <input className="input bg-gray-200 text-black " type="password" placeholder="enter your password here" />
                    <button className="btn bg-gray-900 text-white " >Login</button>
                </form>
                <Link to={"/reg"} className="text-lg py-2 text-slate-700" ><p>Dont’t Have An Account ? Register</p></Link>
            </div>
        </div>
    );
};

export default LoginPage;