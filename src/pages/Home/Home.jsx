
import NavbarTop from '../../layouts/Navbar/NavbarTop';
import NavbarSecondary from '../../layouts/Navbar/NavbarSecondary';
import SidebarLeft from '../Sidebar/SidebarLeft';
import NewsFeed from '../MainContent/NewsFeed';
import SidebarRight from '../Sidebar/SidebarRight';
import Marquees from '../../component/Marquee';


const Home = () => {
    return (
        <div className=' max-w-screen-2xl mx-auto'>
            <NavbarTop></NavbarTop>
            <div>
                <Marquees></Marquees>
            </div>
            <NavbarSecondary></NavbarSecondary>
            <section className='grid grid-cols-1  md:grid-cols-4'>
                <div><SidebarLeft></SidebarLeft></div>
                <div className='col-span-2 border-2 border-red-500 '> <NewsFeed></NewsFeed></div>
                <div> <SidebarRight></SidebarRight></div>
            </section>
        </div>
    );
};

export default Home;