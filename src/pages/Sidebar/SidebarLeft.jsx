import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const SidebarLeft = () => {

    const [ctg, setCtg] = useState([])

    useEffect(() => {
        fetch(`categories.json`).then(res => res.json()).then((data) => setCtg(data))
    },)

    return (
        <div>
            <h1>
                Left bar .....
                coming soooon......
                {ctg.length}
            </h1>
            <div className='text-lg font-semibold'>
                {
                    ctg.map((value) => <Link key={value.id}><li  >{value.name}</li></Link>)
                }
            </div>
        </div>
    );
};

export default SidebarLeft;