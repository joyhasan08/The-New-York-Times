import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const SidebarLeft = () => {

    const [ctg, setCtg] = useState([])

    useEffect(() => {
        fetch(`categories.json`).then(res => res.json()).then((data) => setCtg(data))
    },)

    return (
        <div>
            <h1 className='text-2xl font-bold pb-2'>All Categores</h1>
            <div className='text-lg font-semibold px-4 '>
                {
                    ctg.map((value) => <Link key={value.id}><li className='hover:bg-slate-300 rounded-md px-2 '  >{value.name}</li></Link>)
                }
            </div>
        </div>
    );
};

export default SidebarLeft;