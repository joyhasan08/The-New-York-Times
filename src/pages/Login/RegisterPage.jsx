import { Link } from "react-router-dom";


const RegisterPage = () => {
    return (
        <div>
            <div className=" card card-bordered mx-4 my-4 p-5 md:w-6/12 md:mx-auto">
                <h2 className=" text-gray-900  text-4xl font-semibold py-6 text-center">Registration here</h2>
                <form className="flex flex-col space-y-4 text-xl font-semibold" >
                    <p>Email address</p>
                    <input className="input bg-gray-200 text-white" type="email" placeholder="enter your email here" />
                    <p>Password</p>
                    <input className="input bg-gray-200 " type="password" placeholder="enter your password here" />
                    <input className="btn bg-gray-900 text-white " type="submit" />
                </form>
                <Link to={"/login"} className="text-lg py-2 text-slate-700" ><p>Already Have An Account ? Login...</p></Link>
            </div>
        </div>
    );
};

export default RegisterPage;