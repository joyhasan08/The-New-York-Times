import { Link } from "react-router-dom";
import NavbarSecondary from "../../layouts/Navbar/NavbarSecondary";


const LoginPage = () => {
    return (
        <div>
            <div><NavbarSecondary></NavbarSecondary></div>
            <div className=" w-6/12 mx-auto">
                <h2>Login your account</h2>
                <form className="flex flex-col" >
                    <p>Email address</p>
                    <input className="input" type="email" />
                    <p>Password</p>
                    <input className="input" type="password" />
                    <button className="btn" >Login</button>
                </form>
                <Link><p>Dont’t Have An Account ? Register</p></Link>
            </div>
        </div>
    );
};

export default LoginPage;