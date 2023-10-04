
import { AiFillGithub, AiOutlineGoogle } from 'react-icons/ai'
import FindUsOn from '../../component/FindUsOn';

const SidebarRight = () => {
    return (
        <div>
            <section className="card card-bordered p-2 shadow-lg">
                <h2 className="text-lg font-medium py-3">Login With</h2>
                <div className="flex flex-col gap-2">
                    <button className="btn btn-outline" > <span><AiFillGithub></AiFillGithub></span> Login With Github</button>
                    <button className="btn btn-outline" > <span><AiOutlineGoogle></AiOutlineGoogle></span> Login With Google</button>
                </div>
                <div>
                    <FindUsOn></FindUsOn>
                </div>
            </section>
        </div>
    );
};

export default SidebarRight; <h1>Right side bar ....</h1>