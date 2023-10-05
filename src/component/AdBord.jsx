import bg from "./.../../././../assets/bg.png"

const AdBord = () => {
    return (
        <div>
            <div className={`bg-[url("/${bg}")]`}>
                <h2>Create an Amazing Newspaper </h2>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button>Learn More</button>
            </div>
        </div>
    );
};

export default AdBord;