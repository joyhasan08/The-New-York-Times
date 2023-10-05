import Marquee from "react-fast-marquee";

const Marquees = () => {
    return (
        <div className="flex">
            <button className="bg-red-400 text-white md:text-lg font-bold   px-4 py-1">Breking News</button>
            <Marquee className="text-lg">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, ratione vero? Maiores explicabo, neque tenetur repellendus error possimus omnis reprehenderit expedita quod tempore dolor voluptates veniam laboriosam incidunt, ipsa cupiditate..</p>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, ratione vero? Maiores explicabo, neque tenetur repellendus error possimus omnis reprehenderit expedita quod tempore dolor voluptates veniam laboriosam incidunt, ipsa cupiditate..</p>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, ratione vero? Maiores explicabo, neque tenetur repellendus error possimus omnis reprehenderit expedita quod tempore dolor voluptates veniam laboriosam incidunt, ipsa cupiditate..</p>
            </Marquee>
        </div>
    );
};

export default Marquees;