
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"

const FindUsOn = () => {
    return (
        <div>
            <h2 className="text-xl font-bold py-4 px-1" >Find Us ON </h2>
            <a href="">
                <p className="flex items-center gap-2  border-b-2 py-4 px-2 text-lg font-semibold " ><span><BsFacebook></BsFacebook></span>Facebook</p>
            </a>
            <a href="">
                <p className="flex items-center gap-2  border-b-2 py-4 px-2 text-lg font-semibold " ><span><BsTwitter></BsTwitter></span>Twitter</p>
            </a>
            <a href="">
                <p className="flex items-center gap-2  py-4 px-2 text-lg font-semibold " ><span><BsInstagram></BsInstagram></span>Instagram</p>
            </a>
        </div>
    );
};

export default FindUsOn;