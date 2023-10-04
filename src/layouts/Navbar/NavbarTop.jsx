import newWork from './../../assets/newWork.png'
import moment from 'moment';
const NavbarTop = () => {
    return (
        <div className='text-center'>
            <img className='w-fit mx-auto' src={newWork} alt="" />
            <h2>Journalism Without Fear or Favour</h2>
            <h2>{moment().format("dddd, MMMM Do YYYY,")}</h2>

        </div>
    );
};

export default NavbarTop;