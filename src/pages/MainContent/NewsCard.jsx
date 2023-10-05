import { BsFillBookmarkFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const NewsCard = ({ value }) => {
    console.log(value);
    const {
        details,
        image_url,
        title,
        total_view,
        thumbnail_url,
        category_id


    } = value

    return (
        <div>
            <div className='card card-bordered px-4 py-2 mt-4'>
                <div className='  flex items-center justify-between mt-4 rounded-2xl'>
                    <div className='flex items-center gap-3 px-2 py-1  '>
                        <div>
                            <img className='w-10 rounded-full' src={value.author.img} alt="" />
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold' >{value.author.name}</h2>
                            <p className="" >{value.author.published_date}</p>
                        </div>
                    </div>
                    <div className=''>
                        <button className='btn' ><BsFillBookmarkFill></BsFillBookmarkFill></button>
                    </div>
                </div>
                <div className='card space-y-4  '>

                    <h1 className='text-2xl font-bold py-2'>{title}</h1>
                    <img src={image_url} alt="" />
                    <p className='text-lg py-4 max-h-96 text-clip  overflow-y-hidden overscroll-y-contain  ' >{details}</p>
                    <Link className='font-bold text-slate-700'  >Read More ...</Link>
                </div>
                <div></div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {

};

export default NewsCard;