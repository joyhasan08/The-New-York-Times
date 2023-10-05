import { useEffect } from "react";
import { useState } from "react";
import NewsCard from "./NewsCard";


const NewsFeed = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch(`news.json`).then(res => res.json()).then(data => setNews(data))
    }, [])
    return (
        <div>

            {
                news.map((value) => <NewsCard key={value.category_id} value={value} ></NewsCard>)
            }
        </div>
    );
};

export default NewsFeed; 