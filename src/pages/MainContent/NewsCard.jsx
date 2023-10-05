import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({ value }) => {
    console.log(value);
    const {
        details,
        image_url,
        title,
        total_view,
        thumbnail_url,

    } = value

    return (
        <div>
            <div className='card shadow-2xl px-4 mt-4'>
                <div className='bg-gray-200 flex items-center justify-between mt-4 rounded-2xl'>
                    <div className='flex items-center gap-3 px-2 py-1  '>
                        <div>
                            <img className='w-10 rounded-full' src={value.author.img} alt="" />
                        </div>
                        <div>
                            <h2>{value.author.name}</h2>
                            <p>{value.author.published_date}</p>
                        </div>
                    </div>
                    <div className=''>
                        <p>Icon</p>
                    </div>
                </div>
                <div className='card space-y-4 '>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <img cal src={image_url} alt="" />
                    <p>{details}</p>
                    <Link  >Read More ...</Link>
                </div>
                <div></div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {

};

export default NewsCard;